import {IPfcc} from "../../commons/models/common.models";
import {IFood} from "../../commons/models/domain.models";
import {IFormState} from "./form.commons";
import {FormControlStatus, ValidationErrors} from "@angular/forms";

export interface IAddFoodFormState extends IFormState<IAddFoodFormModel> {
}

export interface FoodFormIngredient {
  ingredient: IFood;
  weight: number;
  index: number;
}

export interface IAddFoodFormModel {
  name: string | null;
  description: string | null;
  isHidden: boolean;
  pfcc: IPfcc;
  ingredients: FoodFormIngredient[];
}

export class AddFoodFormResetAction {
  static readonly type = '[ADD FOOD] Reset form';
}

export class AddFoodFormValueChangedEvent {
  static readonly type = '[ADD FOOD] Form value changed';

  constructor(public readonly data: IAddFoodFormModel) {
  }
}

export class AddFoodFormStatusChangedEvent {
  static readonly type = '[ADD FOOD] Form status changed';

  constructor(public readonly status: FormControlStatus,
              public readonly errors: ValidationErrors | null = null) {
  }
}

export class AddFoodPfccRecalculatedEvent {
  static readonly type = '[DOMAIN] Add food - pfcc recalculated';

  constructor(public readonly pfcc: IPfcc) {
  }
}

export class AddFoodIngredientsCleanedUpEvent {
  static readonly type = '[DOMAIN] Add food - ingredients cleaned up';

  constructor() {
  }
}
