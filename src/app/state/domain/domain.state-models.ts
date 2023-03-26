import {IDish, IFood, IMeal, IProfile, IProfileResponse} from '../../commons/models/domain.models';
import {IPfcc} from '../../commons/models/common.models';

export interface IDomainState {
  profile: IProfile | null;
  foods: IFood[];
  meals: IMeal[];
  dishes: IDish[];
}

export class ProfileLoadedEvent {
  static readonly type = '[DOMAIN] Profile loaded';

  constructor(public readonly profile: IProfileResponse) {
  }
}

export class ConfigureProfileAction {
  static readonly type = '[DOMAIN] Configure profile';

  constructor(public readonly aims: IPfcc, public readonly base?: IPfcc) {
  }
}

export class ProfileConfiguredSuccessfullyEvent {
  static readonly type = '[DOMAIN] Profile configuration updated';

  constructor(public readonly aims: IPfcc, public readonly base: IPfcc | null) {
  }
}

export class ProfileConfigurationFailedEvent {
  static readonly type = '[DOMAIN] Profile configuration failed';

  constructor(public readonly msg: string) {
  }
}

export class RemoveMealAction {
  static readonly type = '[DOMAIN] Remove meal';

  constructor(public readonly mealId: number) {
  }
}

export class MealRemovedSuccessfullyEvent {
  static readonly type = '[DOMAIN] Meal removed';

  constructor(public readonly mealId: number) {
  }
}

export class MealRemovingFailedEvent {
  static readonly type = '[DOMAIN] Meal removing failed';

  constructor(public readonly mealId: number,
              public readonly msg: string) {
  }
}

export class DeleteDishAction {
  static readonly type = '[DOMAIN] Delete dish';

  constructor(public readonly dishId: number) {
  }
}
