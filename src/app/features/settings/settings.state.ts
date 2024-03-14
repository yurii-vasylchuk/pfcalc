import {NgxsOnInit, Selector, State, StateContext} from '@ngxs/store';
import {Settings} from './settings.state-models';
import {ApiService} from '../../service/api.service';
import {IPfcc} from '../../commons/models/common.models';
import {Injectable} from '@angular/core';


@State<Settings.ISettingsState>({
  name: 'settings',
  defaults: {
    aims: null,
    name: null,
  },
})
@Injectable()
export class SettingsState implements NgxsOnInit {
  private static api: ApiService;

  constructor(private api: ApiService) {
    SettingsState.api = api;
  }

  ngxsOnInit(ctx: StateContext<Settings.ISettingsState>): void {
    this.api.getProfile().subscribe(profile => ctx.patchState({
      aims: profile.aims,
      name: profile.name,
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
}
