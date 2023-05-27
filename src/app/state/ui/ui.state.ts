import {Action, Selector, State, StateContext} from "@ngxs/store";
import {IUiStateModel, ToggleMenuAction} from "./ui.state-model";

export const UI_STATE_NAME = 'ui';
@State<IUiStateModel>({
  name: UI_STATE_NAME,
  defaults: {
    sideMenuOpened: false,
  }
})
export class UiState {
  @Selector()
  static sideMenuOpened(state: IUiStateModel): boolean {
    return state.sideMenuOpened;
  }

  @Action(ToggleMenuAction)
  handleToggleMenuAction(ctx: StateContext<IUiStateModel>, action: ToggleMenuAction) {
    ctx.patchState({
      sideMenuOpened: action.isOpened != null ? action.isOpened : !ctx.getState().sideMenuOpened
    });
  }
}
