export namespace Navigation {
  export interface INavigationState {
    history: INavigationEntry[];
  }

  export interface INavigationEntry {
    url: string[];
    queryParams: { [key: string]: any };
  }

  export const NAVIGATE_BACK = "[Navigation] Navigate back";

  export type NavigateBackPayload = {
    additionalQueryParams?: { [key: string]: any };
  }
}
