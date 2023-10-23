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
} from './auth.state-models';
import {ApiService} from '../../service/api.service';
import {catchError, map, of, switchMap, tap} from 'rxjs';
import {Navigate} from '@ngxs/router-plugin';
import {ProfileConfiguredSuccessfullyEvent, ProfileLoadedEvent} from '../domain/domain.state-models';
import * as fromRoutes from '../../commons/routes';
import {LocalStoreService} from '../../service/local-store.service';
import {UnknownBoolean} from '../../commons/models/common.models';
import {Language} from '../../commons/models/auth.models';
import {DateTime} from 'luxon';


@State<IAuthState>({
  name: 'auth',
  defaults: {
    profileConfigured: UnknownBoolean.UNKNOWN,
    loggedIn: UnknownBoolean.UNKNOWN,
    token: null,
    aims: null,
    email: null,
    name: null,
    preferredLanguage: null,
    language: AuthState.DEFAULT_LANGUAGE,
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
  static token(state: IAuthState): string | null {
    return state.token;
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
    const token = this.localStoreService.loadJwtToken();
    if (token == null) {
      ctx.patchState({
        loggedIn: UnknownBoolean.FALSE,
      });
      return;
    }

    try {
      const s = JSON.parse(atob(token.split('.')[1]));
      if (DateTime.fromSeconds(s.exp) < DateTime.now()) {
        ctx.patchState({
          loggedIn: UnknownBoolean.FALSE,
        });
        ctx.dispatch(new Navigate([fromRoutes.signIn]));
        return;
      }
      ctx.patchState({
        token: token,
        loggedIn: UnknownBoolean.TRUE,
      });
    } catch (_) {
      ctx.patchState({
        loggedIn: UnknownBoolean.FALSE,
      });
      ctx.dispatch(new Navigate([fromRoutes.signIn]));
      return;
    }

    this.api.getProfile()
      .pipe(
        tap(profile => {
          ctx.patchState({
            loggedIn: UnknownBoolean.TRUE,
            token: token,
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
      )
      .subscribe(ctx.dispatch);
  }

  @Action(AuthLogOutAction)
  handleAuthLogOutAction(ctx: StateContext<IAuthState>, action: AuthLogOutAction) {
    this.localStoreService.dropJwtToken();

    ctx.patchState({
      token: null,
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
        map(signInRsp => new AuthSignInSucceededEvent(signInRsp.token)),
        catchError(err => of(new AuthSignInFailedEvent(err.message ?? 'Sign in failed'))),
        map(ctx.dispatch),
      );
  }

  @Action(AuthSignInSucceededEvent)
  signInSucceeded(ctx: StateContext<IAuthState>, action: AuthSignInSucceededEvent) {
    ctx.patchState({
      token: action.token,
      loggedIn: UnknownBoolean.TRUE,
    });

    this.localStoreService.saveJwtToken(action.token);

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

          const navigationEvent = profile.profileConfigured ?
                                  new Navigate([fromRoutes.dashboard]) :
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
      token: null,
      loggedIn: UnknownBoolean.FALSE,
      profileConfigured: UnknownBoolean.FALSE,
    });
  }

  @Action(AuthSignUpAction)
  signUp(ctx: StateContext<IAuthState>, action: AuthSignUpAction) {
    return this.api.signUp(action.email, action.name, action.password, ctx.getState().language)
      .pipe(
        map(rsp => new AuthSignUpSucceededEvent(rsp.token)),
        catchError(err => of(new AuthSignUpFailedEvent(err.message))),
        map(ctx.dispatch),
      );
  }

  @Action(AuthSignUpSucceededEvent)
  handleSignUpSuccess(ctx: StateContext<IAuthState>, action: AuthSignUpSucceededEvent) {
    ctx.patchState({
      token: action.token,
      loggedIn: UnknownBoolean.TRUE,
      profileConfigured: UnknownBoolean.FALSE,
    });

    this.localStoreService.saveJwtToken(action.token);

    return ctx.dispatch(new Navigate([`/${fromRoutes.completeProfile}`]));
  }

  @Action(AuthSignUpFailedEvent)
  handleSignUpFailed(ctx: StateContext<IAuthState>, action: AuthSignUpFailedEvent) {
    console.warn(action.msg);

    ctx.patchState({
      token: null,
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

}
