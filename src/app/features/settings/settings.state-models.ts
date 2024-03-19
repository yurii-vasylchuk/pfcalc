import {IPfcc} from '../../commons/models/common.models';

export namespace Settings {
  export type ISettingsState = {
    aims: IPfcc;
    name: string;
  }

  export type UpdateAimsPayload = IPfcc;
  export type UpdateUsernamePayload = string;

  export const UPDATE_AIMS = '[Settings] Update aims';
  export const UPDATE_USERNAME = '[Settings] Update username';
}
