import {Language} from '../commons/models/auth.models';
import {IPfcc} from '../commons/models/common.models';

export namespace Profile {
  export const DEFAULT_LANGUAGE = 'EN';

  export type IProfileState = {
    email: string;
    name: string;
    preferredLanguage: Language;
    aims: IPfcc;
    language: Language;
  }

  export const LANGUAGE_CHANGED_EVENT = '[Profile] Language changed';

  export type LanguageChangedEventPayload = Language;
}
