import {Selector, State, StateContext} from "@ngxs/store";
import {IUiStateModel, Ui} from "./ui.state-model";
import {Injectable} from '@angular/core';
import {EmitterAction, Receiver} from '@ngxs-labs/emitter';

export const UI_STATE_NAME = 'UI';

@State<IUiStateModel>({
  name: UI_STATE_NAME,
  defaults: {
    sideMenuOpened: false,
  },
})
@Injectable()
export class UiState {

  @Selector()
  static sideMenuOpened(state: IUiStateModel): boolean {
    return state.sideMenuOpened;
  }

  @Receiver({type: Ui.TOGGLE_SIDE_MENU})
  static toggleSideMenu(ctx: StateContext<IUiStateModel>, {payload}: EmitterAction<boolean>): void {
    ctx.patchState({
      sideMenuOpened: payload ?? !ctx.getState().sideMenuOpened,
    });
  }
}
