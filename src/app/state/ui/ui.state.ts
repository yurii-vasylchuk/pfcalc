import {Selector, State, StateContext} from '@ngxs/store'
import {Ui} from './ui.state-model'
import {Injectable} from '@angular/core'
import {EmitterAction, Receiver} from '@ngxs-labs/emitter'
import {RouterDataResolved} from '@ngxs/router-plugin'

export const UI_STATE_NAME = 'UI'

@State<Ui.IUiStateModel>({
  name: UI_STATE_NAME,
  defaults: {
    sideMenuOpened: false,
    showHeader: true,
  },
})
@Injectable()
export class UiState {
  @Selector()
  static sideMenuOpened(state: Ui.IUiStateModel): boolean {
    return state.sideMenuOpened
  }

  @Selector()
  static showHeader(state: Ui.IUiStateModel): boolean {
    return state.showHeader
  }

  @Receiver({type: Ui.TOGGLE_SIDE_MENU})
  static toggleSideMenu(ctx: StateContext<Ui.IUiStateModel>, {payload}: EmitterAction<boolean>): void {
    ctx.patchState({
      sideMenuOpened: payload ?? !ctx.getState().sideMenuOpened,
    })
  }

  @Receiver({action: RouterDataResolved})
  static onNavigate(ctx: StateContext<Ui.IUiStateModel>, action: RouterDataResolved) {
    ctx.patchState({
      showHeader: !action.routerState.root.firstChild.data?.['hideHeader'] ?? false,
    })
  }
}
