import {IPfcc, UnknownBoolean} from '../../commons/models/common.models';


export namespace Auth {
  export interface IAuthState {
    loggedIn: UnknownBoolean,
    refreshToken: string | null,
    afterAuthUrl?: string,
    refreshInProgress: boolean,
  }

  export const SIGN_IN = '[AUTH] Sign in';
  export const LOG_OUT = '[AUTH] Log out';
  export const SIGN_UP = '[AUTH] Sign up';
  export const REFRESH_AUTH = '[AUTH] Refresh auth action';
  export const CONFIGURE_PROFILE = '[AUTH] Configure profile';

  export type SignInPayload = {
    email: string,
    password: string
  };

  export type SignUpPayload = {
    email: string;
    name: string;
    password: string;
  };

  export type ConfigureProfilePayload = {
    aims: IPfcc;
  };

  export class ProfileConfiguredSuccessfullyEvent {
    static readonly type = '[Auth] Profile configured successfully';

    constructor(readonly aims: IPfcc) {
    }
  }
}
