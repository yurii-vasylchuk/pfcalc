import {NgxsOnInit, Selector, State, StateContext} from '@ngxs/store';
import {Profile} from './profile.state-model';
import {EmitterAction, Receiver} from '@ngxs-labs/emitter';
import {Language} from '../commons/models/auth.models';
import {IPfcc} from '../commons/models/common.models';
import {ProfileLoadedEvent} from '../commons/models/state.models';
import {Injectable} from '@angular/core';
import {Auth} from '../features/auth/auth.state-models';
import IProfileState = Profile.IProfileState;

@State<Profile.IProfileState>({
  name: 'profile',
  defaults: {
    name: null,
    email: null,
    preferredLanguage: null,
    aims: null,
    language: null,
  },
})
@Injectable({providedIn: 'root'})
export class ProfileState implements NgxsOnInit {

  @Selector()
  static language(state: IProfileState): Language {
    return state.language;
  }

  @Selector()
  static aims(state: IProfileState): IPfcc {
    return state.aims;
  }

  ngxsOnInit(ctx: StateContext<Profile.IProfileState>): void {
    const lang = navigator.language.substring(0, 2);
    switch (lang) {
      case 'ua':
      case 'ru':
        ctx.patchState({
          language: 'UA',
        });
        break;
      case 'en':
        ctx.patchState({
          language: 'EN',
        });
        break;
      default:
        console.warn(`Can't infer supported language from ${navigator.language}. Defaulting to EN`);
        ctx.patchState({
          language: 'EN',
        });
    }
  }

  @Receiver({action: ProfileLoadedEvent})
  public static profileLoaded(ctx: StateContext<Profile.IProfileState>, {profile}: ProfileLoadedEvent) {
    ctx.patchState({
      name: profile.name,
      email: profile.email,
      aims: profile.aims,
      preferredLanguage: profile.preferredLanguage,
      language: ctx.getState().language ?? profile.preferredLanguage,
    });
  }

  @Receiver({type: Profile.LANGUAGE_CHANGED_EVENT})
  static languageChanged(ctx: StateContext<Profile.IProfileState>, {payload}: EmitterAction<Profile.LanguageChangedEventPayload>) {
    ctx.patchState({
      language: payload,
    });
  }

  @Receiver(Auth.ProfileConfiguredSuccessfullyEvent)
  static profileConfigured(ctx: StateContext<Profile.IProfileState>, {aims}: Auth.ProfileConfiguredSuccessfullyEvent) {
    ctx.patchState({
      aims,
    });
  }
}