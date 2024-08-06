import {NgxsOnInit, Selector, State, StateContext} from '@ngxs/store';
import {Settings} from './settings.state-models';
import {ApiService} from '../../service/api.service';
import {IPfcc} from '../../commons/models/common.models';
import {Injectable} from '@angular/core';
import {EmitterAction, Receiver} from '@ngxs-labs/emitter';
import {catchError, EMPTY, Observable, tap} from 'rxjs';
import {AlertService} from '../../service/alert.service';


@State<Settings.ISettingsState>({
  name: 'settings',
  defaults: {
    aims: null,
    name: null,
    email: null
  },
})
@Injectable()
export class SettingsState implements NgxsOnInit {
  private static api: ApiService;
  private static alerts: AlertService;

  constructor(private api: ApiService, alerts: AlertService) {
    SettingsState.api = api;
    SettingsState.alerts = alerts;
  }

  ngxsOnInit(ctx: StateContext<Settings.ISettingsState>): void {
    this.api.getProfile().subscribe(profile => ctx.patchState({
      aims: profile.aims,
      name: profile.name,
      email: profile.email,
    }));
  }

  @Selector()
  static aims(state: Settings.ISettingsState): IPfcc {
    return state.aims;
  }

  @Selector()
  static username(state: Settings.ISettingsState): string {
    return state.name;
  }

  @Selector()
  static email(state: Settings.ISettingsState): string {
    return state.email;
  }

  @Receiver({type: Settings.UPDATE_USERNAME})
  static updateUsername(ctx: StateContext<Settings.ISettingsState>,
                        {payload}: EmitterAction<Settings.UpdateUsernamePayload>): Observable<void> {
    return this.api.updateProfile({name: payload}).pipe(
      tap(_ => {
        ctx.patchState({
          name: payload,
        });
        this.alerts.success('settings.name-saved-alert')
      }),
      catchError(_ => {
        this.alerts.warn('alert.default-error');
        return EMPTY;
      }),
    )
  }

  @Receiver({type: Settings.UPDATE_AIMS})
  static updateAims(ctx: StateContext<Settings.ISettingsState>,
                    {payload}: EmitterAction<Settings.UpdateAimsPayload>): Observable<void> {
    const newAims: IPfcc = {
      protein: payload.protein != null && payload.protein > 0 ? payload.protein : null,
      fat: payload.fat != null && payload.fat > 0 ? payload.fat : null,
      carbohydrates: payload.carbohydrates != null && payload.carbohydrates > 0 ? payload.carbohydrates : null,
      calories: payload.calories != null && payload.calories > 0 ? payload.calories : null,
    };

    return this.api.updateProfile({aims: newAims})
      .pipe(
        tap(_ => {
          ctx.patchState({
            aims: payload,
          });
          this.alerts.success('settings.aims-saved-alert')
        }),
        catchError(_ => {
          this.alerts.warn('alert.default-error');
          return EMPTY;
        }),
      );
  }
  @Receiver({type: Settings.UPDATE_PASSWORD})
  static updatePassword(ctx: StateContext<Settings.ISettingsState>,
                        {payload}: EmitterAction<Settings.UpdatePasswordPayload>): Observable<void> {
    return this.api.updateProfile({...payload}).pipe(
      tap(_ => this.alerts.success('settings.password-updated-alert')),
      catchError(_ => {
        this.alerts.warn('alert.default-error');
        return EMPTY;
      }),
    );
  }
}
