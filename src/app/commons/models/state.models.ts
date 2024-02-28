import {IProfile} from './domain.models';

export class ProfileLoadedEvent {
  static readonly type = '[Profile] Profile loaded';

  constructor(public readonly profile: IProfile) {
  }
}
