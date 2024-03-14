import {IPfcc} from '../../commons/models/common.models';

export namespace Settings {
  export interface ISettingsState {
    aims: IPfcc;
    name: string;
  }
}
