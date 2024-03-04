import {Injectable} from '@angular/core';
import {Action, NgxsOnInit, Selector, State, StateContext, Store} from '@ngxs/store';
import {Auth} from './auth.state-models';
import {ApiService} from '../../service/api.service';
import {catchError, EMPTY, map, of, switchMap, tap} from 'rxjs';
import {Navigate} from '@ngxs/router-plugin';
import * as fromRoutes from '../../commons/routes';
import {LocalStoreService} from '../../service/local-store.service';
import {UnknownBoolean} from '../../commons/models/common.models';
import {SelectSnapshot} from '@ngxs-labs/select-snapshot';
import {ProfileState} from '../../state/profile.state';
import {Language} from '../../commons/models/auth.models';
import {EmitterAction, Receiver} from '@ngxs-labs/emitter';
import {ProfileLoadedEvent} from '../../commons/models/state.models';
import {AlertService} from '../../service/alert.service';
import IAuthState = Auth.IAuthState;


@State<Auth.IAuthState>({
  name: 'auth',
  defaults: {
    profileConfigured: UnknownBoolean.UNKNOWN,
    loggedIn: UnknownBoolean.UNKNOWN,
    refreshToken: null,
    afterAuthUrl: null,
    refreshInProgress: false,
  },
})
@Injectable()
export class AuthState implements NgxsOnInit {
  private static api: ApiService;
  private static localStoreService: LocalStoreService;
  private static store: Store;
  private static alert: AlertService;

  @SelectSnapshot(ProfileState.language)
  language: Language;

  constructor(private api: ApiService,
              private localStoreService: LocalStoreService,
              private alert: AlertService) {
    AuthState.api = api;
    AuthState.localStoreService = localStoreService;
    AuthState.alert = alert;
  }

  @Selector()
  static refreshToken(state: Auth.IAuthState): string | null {
    return state.refreshToken;
  }

  @Selector()
  static refreshInProgress(state: Auth.IAuthState): boolean {
    return state.refreshInProgress;
  }

  @Selector()
  static profileConfigured(state: Auth.IAuthState): UnknownBoolean {
    return state.loggedIn.and(state.profileConfigured);
  }

  @Selector()
  static isAuthenticated(state: Auth.IAuthState): UnknownBoolean {
    return state.loggedIn;
  }

  ngxsOnInit(ctx: StateContext<Auth.IAuthState>): void {
    const refreshToken = this.localStoreService.loadRefreshToken();
    if (refreshToken != null) {
      ctx.patchState({
        refreshToken,
      });
    }

    this.api.getProfile()
      .pipe(
        tap(profile => {
          ctx.patchState({
            loggedIn: UnknownBoolean.TRUE,
            profileConfigured: UnknownBoolean.of(profile.profileConfigured),
          });

          if (!profile.profileConfigured) {
            ctx.dispatch(new Navigate([fromRoutes.completeProfile]));
          }
        }),
        map(profile => new ProfileLoadedEvent(profile)),
        catchError(_ => {
          ctx.patchState({
            loggedIn: UnknownBoolean.FALSE,
          });

          return of(new Navigate([fromRoutes.signIn]));
        }),
      )
      .subscribe(ctx.dispatch);
  }

  @Receiver({type: Auth.LOG_OUT})
  static logOut(ctx: StateContext<Auth.IAuthState>, _: EmitterAction) {
    this.localStoreService.dropRefreshToken();

    ctx.patchState({
      refreshToken: null,
      loggedIn: UnknownBoolean.FALSE,
      profileConfigured: UnknownBoolean.UNKNOWN,
    });
  }

  @Receiver({type: Auth.SIGN_IN})
  static signIn(ctx: StateContext<Auth.IAuthState>, {payload}: EmitterAction<Auth.SignInPayload>) {
    return this.api.signIn(payload.email, payload.password)
      .pipe(
        switchMap(rsp => {
          ctx.patchState({
            refreshToken: rsp.refreshToken,
            loggedIn: UnknownBoolean.TRUE,
          });

          this.localStoreService.saveRefreshToken(rsp.refreshToken);

          return this.api.getProfile();
        }),
        switchMap(profile => {
          ctx.patchState({
            profileConfigured: UnknownBoolean.of(profile.profileConfigured),
          });

          let redirectUrl = ctx.getState().afterAuthUrl;
          if (redirectUrl != null) {
            ctx.patchState({
              afterAuthUrl: null,
            });
          } else {
            redirectUrl = fromRoutes.dashboard;
          }

          const navigationEvent = profile.profileConfigured ?
                                  new Navigate([redirectUrl]) :
                                  new Navigate([fromRoutes.completeProfile]);

          return ctx.dispatch([
            navigationEvent,
            new ProfileLoadedEvent(profile),
          ]);
        }),
        catchError(err => {
          ctx.patchState({
            refreshToken: null,
            loggedIn: UnknownBoolean.FALSE,
            profileConfigured: UnknownBoolean.FALSE,
          });
          this.alert.warn('alert.default-error');
          console.error(err);

          return EMPTY;
        }),
      );
  }

  @Receiver({type: Auth.SIGN_UP})
  static signUp(ctx: StateContext<Auth.IAuthState>, {payload}: EmitterAction<Auth.SignUpPayload>) {
    return this.store.select(ProfileState.language)
      .pipe(
        switchMap(language => this.api.signUp(payload.email, payload.name, payload.password, language)),
        map(rsp => {
          ctx.patchState({
            refreshToken: rsp.refreshToken,
            loggedIn: UnknownBoolean.TRUE,
            profileConfigured: UnknownBoolean.FALSE,
          });

          this.localStoreService.saveRefreshToken(rsp.refreshToken);

          return new Navigate([`/${fromRoutes.completeProfile}`]);
        }),
        catchError(err => {
          this.alert.warn('alert.default-error');


          console.warn(err.msg);

          ctx.patchState({
            refreshToken: null,
            loggedIn: UnknownBoolean.FALSE,
            profileConfigured: UnknownBoolean.FALSE,
          });
          return EMPTY;
        }),
        map(ctx.dispatch),
      );
  }

  @Receiver({type: Auth.REFRESH_AUTH, cancelUncompleted: false})
  static refreshAuth(ctx: StateContext<Auth.IAuthState>, _: EmitterAction) {
    ctx.patchState({
      refreshInProgress: true,
    });

    return this.api.refreshAuth(ctx.getState().refreshToken)
      .pipe(
        map(rsp => {
          ctx.patchState({
            refreshToken: rsp.refreshToken,
            refreshInProgress: false,
            loggedIn: UnknownBoolean.TRUE,
          });

          this.localStoreService.saveRefreshToken(rsp.refreshToken);
        }),
        catchError(err => {
          this.alert.warn('alert.default-error');


          console.warn(err.msg);

          ctx.patchState({
            refreshToken: null,
            refreshInProgress: false,
            loggedIn: UnknownBoolean.FALSE,
            profileConfigured: UnknownBoolean.FALSE,
          });

          return EMPTY;
        }),
      );
  }

  @Receiver({type: Auth.CONFIGURE_PROFILE})
  static configureProfile(ctx: StateContext<Auth.IAuthState>, {payload}: EmitterAction<Auth.ConfigureProfilePayload>) {
    return this.api.configureProfile(payload.aims)
      .pipe(
        tap(_ => {
          ctx.patchState({
            profileConfigured: UnknownBoolean.TRUE,
          });
        }),
        map(_ => new Auth.ProfileConfiguredSuccessfullyEvent(payload.aims)),
        catchError(err => {
          console.error(err);
          this.alert.warn('alert.default-error');


          return EMPTY;
        }),
        map(ctx.dispatch),
      );
  }

  @Action(Auth.ProfileConfiguredSuccessfullyEvent)
  handleProfileConfigured(ctx: StateContext<Auth.IAuthState>, _: Auth.ProfileConfiguredSuccessfullyEvent) {
    if (ctx.getState().loggedIn) {
      ctx.patchState({
        profileConfigured: UnknownBoolean.TRUE,
      });

      return ctx.dispatch(new Navigate(['/']));
    }
    return null;
  }

  @Action(ProfileLoadedEvent)
  handleProfileLoadedEvent(ctx: StateContext<Auth.IAuthState>, action: ProfileLoadedEvent) {
    ctx.patchState({
      profileConfigured: action.profile.profileConfigured ? UnknownBoolean.TRUE : UnknownBoolean.FALSE,
    });
  }

  @Action(Navigate)
  handleNavigate(ctx: StateContext<IAuthState>, action: Navigate) {
    if (action.path.length > 1 || (action.path[0] !== `/${fromRoutes.signIn}` && action.path[0] !== `/${fromRoutes.signUp}`)) {
      return;
    }

    ctx.patchState({
      afterAuthUrl: window.location.pathname,
    });
  }
}
