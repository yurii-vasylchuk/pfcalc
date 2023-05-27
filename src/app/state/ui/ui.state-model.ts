export interface IUiStateModel {
  sideMenuOpened: boolean;
}

export class ToggleMenuAction {
   static readonly type = '[UI] Toggle side menu';

   constructor(public readonly isOpened?: boolean) {
   }
}
