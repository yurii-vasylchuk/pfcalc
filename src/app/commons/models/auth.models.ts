import {IProfileResponse} from './domain.models';

export interface ISignInResponse extends IProfileResponse {
  token: string;
}

export interface ISignUpResponse {
  token: string;
}

export type Language = 'en' | 'ua';

export interface IAccount {
  email: string;
  preferredLanguage: Language;
}
