import {IPfcc} from '../../commons/models/common.models'

export namespace Settings {
  export type ISettingsState = {
    aims: IPfcc;
    name: string;
    email: string;
  }

  export type UpdateAimsPayload = IPfcc;
  export type UpdateUsernamePayload = string;
  export type UpdatePasswordPayload = {
    currentPassword: string;
    newPassword: string;
  };

  export const UPDATE_AIMS = '[Settings] Update aims'
  export const UPDATE_USERNAME = '[Settings] Update username'
  export const UPDATE_PASSWORD = '[Settings] Update password'
}
