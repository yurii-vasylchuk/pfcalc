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
import {ProfileService} from '../../service/profile.service';
import {catchError, map, mergeMap, of, tap} from 'rxjs';
import {Navigate} from '@ngxs/router-plugin';
import {ProfileConfiguredSuccessfullyEvent, ProfileLoadedEvent} from '../domain/domain.state-models';
import * as fromRoutes from '../../commons/routes';
import {LocalStoreService} from '../../service/local-store.service';
import {UnknownBoolean} from '../../commons/models/common.models';
import {IAccount, Language} from '../../commons/models/auth.models';


@State<IAuthState>({
  name: 'auth',
  defaults: {
    profileConfigured: UnknownBoolean.UNKNOWN,
    loggedIn: UnknownBoolean.UNKNOWN,
    token: null,
    account: null,
    language: AuthState.DEFAULT_LANGUAGE
  },
})
@Injectable()
export class AuthState implements NgxsOnInit {
  constructor(private profileService: ProfileService,
              private localStoreService: LocalStoreService) {
  }

  public static readonly DEFAULT_LANGUAGE: Language = 'ua';

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

  @Selector()
  static account(state: IAuthState): IAccount | null {
    return state.account;
  }

  ngxsOnInit(ctx: StateContext<IAuthState>): void {
    const token = this.localStoreService.loadJwtToken();
    if (token == null) {
      ctx.patchState({
        loggedIn: UnknownBoolean.FALSE,
      });
      return;
    }

    this.profileService.getProfile()
      .pipe(
        tap(profile => {
          ctx.patchState({
            loggedIn: UnknownBoolean.TRUE,
            token: token,
            account: profile.account,
            profileConfigured: UnknownBoolean.of(profile.profileConfigured),
            language: profile.account.preferredLanguage
          });

          if (profile.profileConfigured) {
            ctx.dispatch(new Navigate([fromRoutes.dashboard]));
          } else {
            ctx.dispatch(new Navigate([fromRoutes.completeProfile]));
          }
        }),
        map(profile => new ProfileLoadedEvent(profile))
      )
      .subscribe(ctx.dispatch);
  }

  @Action(AuthLogOutAction)
  handleAuthLogOutAction(ctx: StateContext<IAuthState>, action: AuthLogOutAction) {
    ctx.patchState({
      token: null,
      loggedIn: UnknownBoolean.FALSE,
      profileConfigured: UnknownBoolean.UNKNOWN,
      account: null,
    });
  }

  @Action(AuthSignInAction)
  signIn(ctx: StateContext<IAuthState>, action: AuthSignInAction) {
    return this.profileService.signIn(action.email, action.password)
      .pipe(
        mergeMap(rsp => of(
          new ProfileLoadedEvent(rsp),
          new AuthSignInSucceededEvent(rsp.token, rsp.profileConfigured, rsp.account),
        )),
        catchError(err => of(new AuthSignInFailedEvent(err.message ?? 'Sign in failed'))),
        map(ctx.dispatch),
      );
  }

  @Action(AuthSignInSucceededEvent)
  signInSucceeded(ctx: StateContext<IAuthState>, action: AuthSignInSucceededEvent) {
    ctx.patchState({
      token: action.token,
      loggedIn: UnknownBoolean.TRUE,
      profileConfigured: action.isProfileConfigured ? UnknownBoolean.TRUE : UnknownBoolean.FALSE,
      account: action.account,
      language: action.account.preferredLanguage
    });

    this.localStoreService.saveJwtToken(action.token);

    return action.isProfileConfigured ? ctx.dispatch(new Navigate(['/'])) : ctx.dispatch(new Navigate([`/${fromRoutes.completeProfile}`]));
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
    return this.profileService.signUp(action.email, action.password)
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
    const account = ctx.getState().account;
    ctx.patchState({
      language: action.lang
    })
    if (account != null) {
      ctx.patchState({
        account: {
          ...account,
          preferredLanguage: action.lang
        }
      });
    }
  }

}
