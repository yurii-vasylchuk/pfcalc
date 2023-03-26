import {UnknownBoolean} from '../../commons/models/common.models';
import {IAccount} from '../../commons/models/auth.models';

export interface IAuthState {
  loggedIn: UnknownBoolean,
  profileConfigured: UnknownBoolean,
  token: string | null,
  account: IAccount | null;
}

export class AuthSignInAction {
  static readonly type = '[AUTH] Sign in';

  constructor(public readonly email: string,
              public readonly password: string) {
  }
}

export class AuthSignInSucceededEvent {
  static readonly type = '[AUTH] Sign in succeeded';

  constructor(public readonly token: string,
              public readonly isProfileConfigured: boolean,
              public readonly account: IAccount) {
  }
}

export class AuthSignInFailedEvent {
  static readonly type = '[AUTH] Sign in failed';

  constructor(public readonly msg: string) {
  }
}

export class AuthLogOutAction {
  static readonly type = '[AUTH] Log out';
}

export class AuthSignUpAction {
  static readonly type = '[AUTH] Sign up';

  constructor(public readonly email: string,
              public readonly password: string) {
  }
}

export class AuthSignUpSucceededEvent {
  static readonly type = '[AUTH] Sign up succeeded';

  constructor(public readonly token: string) {
  }
}

export class AuthSignUpFailedEvent {
  static readonly type = '[AUTH] Sign up failed';

  constructor(public readonly msg: string) {
  }
}
