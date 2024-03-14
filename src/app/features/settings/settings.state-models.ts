import {IPfcc} from '../../commons/models/common.models';

export namespace Settings {
  export type ISettingsState = {
    aims: IPfcc;
    name: string;
  }

  export type UpdateAimsPayload = IPfcc;

  export const UPDATE_AIMS = '[Settings] Update aims';
}
