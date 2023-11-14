import {Injectable} from '@angular/core';
import {Action, NgxsOnInit, Selector, State, StateContext} from '@ngxs/store';
import {
  AuthLogOutAction,
  AuthSignInAction,
  AuthSignInFailedEvent,
  AuthSignInSucceededEvent,
  AuthSignUpAction,
  AuthSignUpFailedEvent,
  AuthSignUpSucceededEvent,
  IAuthState,
  LanguageChangedEvent,
  RefreshAuthAction,
  RefreshAuthFailedEvent,
  RefreshAuthSucceededEvent,
} from './auth.state-models';
import {ApiService} from '../../service/api.service';
import {catchError, map, of, switchMap, tap} from 'rxjs';
import {Navigate} from '@ngxs/router-plugin';
import {ProfileConfiguredSuccessfullyEvent, ProfileLoadedEvent} from '../domain/domain.state-models';
import * as fromRoutes from '../../commons/routes';
import {LocalStoreService} from '../../service/local-store.service';
import {UnknownBoolean} from '../../commons/models/common.models';
import {Language} from '../../commons/models/auth.models';


@State<IAuthState>({
  name: 'auth',
  defaults: {
    profileConfigured: UnknownBoolean.UNKNOWN,
    loggedIn: UnknownBoolean.UNKNOWN,
    refreshToken: null,
    aims: null,
    email: null,
    name: null,
    preferredLanguage: null,
    language: AuthState.DEFAULT_LANGUAGE,
    afterAuthUrl: null,
  },
})
@Injectable()
export class AuthState implements NgxsOnInit {
  constructor(private api: ApiService,
              private localStoreService: LocalStoreService) {
  }

  public static readonly DEFAULT_LANGUAGE: Language = 'UA';

  @Selector()
  static language(state: IAuthState): Language {
    return state.language;
  }

  @Selector()
  static refreshToken(state: IAuthState): string | null {
    return state.refreshToken;
  }

  @Selector()
  static profileConfigured(state: IAuthState): UnknownBoolean {
    return state.loggedIn.and(state.profileConfigured);
  }

  @Selector()
  static isAuthenticated(state: IAuthState): UnknownBoolean {
    return state.loggedIn;
  }

  ngxsOnInit(ctx: StateContext<IAuthState>): void {
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
            language: ctx.getState().language ?? profile.preferredLanguage,
            preferredLanguage: profile.preferredLanguage,
            name: profile.name,
            email: profile.email,
            aims: profile.aims,
          });

          if (profile.profileConfigured) {
            ctx.dispatch(new Navigate([fromRoutes.dashboard]));
          } else {
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

  @Action(AuthLogOutAction)
  handleAuthLogOutAction(ctx: StateContext<IAuthState>, action: AuthLogOutAction) {
    this.localStoreService.dropRefreshToken();

    ctx.patchState({
      refreshToken: null,
      loggedIn: UnknownBoolean.FALSE,
      profileConfigured: UnknownBoolean.UNKNOWN,
      aims: null,
      email: null,
      name: null,
      preferredLanguage: null,
    });
  }

  @Action(AuthSignInAction)
  signIn(ctx: StateContext<IAuthState>, action: AuthSignInAction) {
    return this.api.signIn(action.email, action.password)
      .pipe(
        map(signInRsp => new AuthSignInSucceededEvent(signInRsp.refreshToken)),
        catchError(err => of(new AuthSignInFailedEvent(err.message ?? 'Sign in failed'))),
        map(ctx.dispatch),
      );
  }

  @Action(AuthSignInSucceededEvent)
  signInSucceeded(ctx: StateContext<IAuthState>, action: AuthSignInSucceededEvent) {
    ctx.patchState({
      refreshToken: action.refreshToken,
      loggedIn: UnknownBoolean.TRUE,
    });

    this.localStoreService.saveRefreshToken(action.refreshToken);

    return this.api.getProfile()
      .pipe(
        switchMap(profile => {
          ctx.patchState({
            name: profile.name,
            email: profile.email,
            aims: profile.aims,
            profileConfigured: UnknownBoolean.of(profile.profileConfigured),
            preferredLanguage: profile.preferredLanguage,
            language: ctx.getState().language ?? profile.preferredLanguage,
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
      );
  }

  @Action(AuthSignInFailedEvent)
  handleSignInFailed(ctx: StateContext<IAuthState>, action: AuthSignInFailedEvent) {
    console.warn(action.msg);

    ctx.patchState({
      refreshToken: null,
      loggedIn: UnknownBoolean.FALSE,
      profileConfigured: UnknownBoolean.FALSE,
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

  @Action(AuthSignUpAction)
  signUp(ctx: StateContext<IAuthState>, action: AuthSignUpAction) {
    return this.api.signUp(action.email, action.name, action.password, ctx.getState().language)
      .pipe(
        map(rsp => new AuthSignUpSucceededEvent(rsp.refreshToken)),
        catchError(err => of(new AuthSignUpFailedEvent(err.message))),
        map(ctx.dispatch),
      );
  }

  @Action(AuthSignUpSucceededEvent)
  handleSignUpSuccess(ctx: StateContext<IAuthState>, action: AuthSignUpSucceededEvent) {
    ctx.patchState({
      refreshToken: action.refreshToken,
      loggedIn: UnknownBoolean.TRUE,
      profileConfigured: UnknownBoolean.FALSE,
    });

    this.localStoreService.saveRefreshToken(action.refreshToken);

    return ctx.dispatch(new Navigate([`/${fromRoutes.completeProfile}`]));
  }

  @Action(AuthSignUpFailedEvent)
  handleSignUpFailed(ctx: StateContext<IAuthState>, action: AuthSignUpFailedEvent) {
    console.warn(action.msg);

    ctx.patchState({
      refreshToken: null,
      loggedIn: UnknownBoolean.FALSE,
      profileConfigured: UnknownBoolean.FALSE,
    });
  }

  @Action(ProfileConfiguredSuccessfullyEvent)
  handleProfileConfigured(ctx: StateContext<IAuthState>, action: ProfileConfiguredSuccessfullyEvent) {
    if (ctx.getState().loggedIn) {
      ctx.patchState({
        profileConfigured: UnknownBoolean.TRUE,
      });

      return ctx.dispatch(new Navigate(['/']));
    }
    return null;
  }

  @Action(ProfileLoadedEvent)
  handleProfileLoadedEvent(ctx: StateContext<IAuthState>, action: ProfileLoadedEvent) {
    ctx.patchState({
      profileConfigured: action.profile.profileConfigured ? UnknownBoolean.TRUE : UnknownBoolean.FALSE,
    });
  }

  @Action(LanguageChangedEvent)
  handleLanguageChangedEvent(ctx: StateContext<IAuthState>, action: LanguageChangedEvent) {
    ctx.patchState({
      language: action.lang,
      preferredLanguage: action.lang,
    });
  }

  @Action(RefreshAuthAction)
  handleRefreshAuthAction(ctx: StateContext<IAuthState>, action: RefreshAuthAction) {
    return this.api.refreshAuth(ctx.getState().refreshToken)
      .pipe(
        map(rsp => new RefreshAuthSucceededEvent(rsp.refreshToken)),
        catchError(err => of(new RefreshAuthFailedEvent(err.message))),
        map(ctx.dispatch),
      );
  }

  @Action(RefreshAuthSucceededEvent)
  handleRefreshAuthSucceededEvent(ctx: StateContext<IAuthState>, action: RefreshAuthSucceededEvent) {
    this.localStoreService.saveRefreshToken(action.refreshToken);
    ctx.patchState({
      refreshToken: action.refreshToken,
      loggedIn: UnknownBoolean.TRUE,
    });
  }

  @Action(RefreshAuthFailedEvent)
  handleRefreshAuthFailedEvent(ctx: StateContext<IAuthState>, action: RefreshAuthFailedEvent) {
    console.warn(action.msg);

    ctx.patchState({
      refreshToken: null,
      loggedIn: UnknownBoolean.FALSE,
      profileConfigured: UnknownBoolean.FALSE,
    });
  }
}
