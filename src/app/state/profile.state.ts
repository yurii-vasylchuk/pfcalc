import {NgxsOnInit, Selector, State, StateContext} from '@ngxs/store'
import {Profile} from './profile.state-model'
import {EmitterAction, Receiver} from '@ngxs-labs/emitter'
import {Language} from '../commons/models/auth.models'
import {IPfcc} from '../commons/models/common.models'
import {ProfileLoadedEvent} from '../commons/models/state.models'
import {Injectable} from '@angular/core'
import {Auth} from '../features/auth/auth.state-models'
import {catchError, EMPTY, Observable} from 'rxjs'
import {ApiService} from '../service/api.service'
import IProfileState = Profile.IProfileState

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
  private static api: ApiService

  constructor(api: ApiService) {
    ProfileState.api = api
  }

  @Selector()
  static language(state: IProfileState): Language {
    return state.language
  }

  @Selector()
  static aims(state: IProfileState): IPfcc {
    return state.aims
  }

  @Receiver({action: ProfileLoadedEvent})
  public static profileLoaded(ctx: StateContext<Profile.IProfileState>, {profile}: ProfileLoadedEvent) {
    ctx.patchState({
      name: profile.name,
      email: profile.email,
      aims: profile.aims,
      preferredLanguage: profile.preferredLanguage,
      language: ctx.getState().language ?? profile.preferredLanguage,
    })
  }

  @Receiver({type: Profile.LANGUAGE_CHANGED_EVENT})
  static languageChanged(ctx: StateContext<Profile.IProfileState>, {payload}: EmitterAction<Profile.LanguageChangedEventPayload>): Observable<void> {
    ctx.patchState({
      language: payload,
    })

    return this.api.updateProfile({preferredLanguage: payload}).pipe(
      catchError(err => {
        console.log('Failed to save preferred language, ', err)
        return EMPTY
      }),
    )
  }

  @Receiver(Auth.ProfileConfiguredSuccessfullyEvent)
  static profileConfigured(ctx: StateContext<Profile.IProfileState>, {aims}: Auth.ProfileConfiguredSuccessfullyEvent) {
    ctx.patchState({
      aims,
    })
  }

  ngxsOnInit(ctx: StateContext<Profile.IProfileState>): void {
    const lang = navigator.language.substring(0, 2)
    switch (lang) {
      case 'ua':
      case 'ru':
        ctx.patchState({
          language: 'UA',
        })
        break
      case 'en':
        ctx.patchState({
          language: 'EN',
        })
        break
      default:
        console.warn(`Can't infer supported language from ${navigator.language}. Defaulting to EN`)
        ctx.patchState({
          language: 'EN',
        })
    }
  }
}
