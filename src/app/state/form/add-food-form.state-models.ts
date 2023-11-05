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
  id?: number;
  name: string | null;
  description: string | null;
  hidden: boolean;
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
  static readonly type = '[ADD FOOD] Pfcc recalculated';

  constructor(public readonly pfcc: IPfcc) {
  }
}

export class AddFoodIngredientsCleanedUpEvent {
  static readonly type = '[ADD FOOD] Ingredients cleaned up';

  constructor() {
  }
}

export class LoadEditingFoodAction {
  static readonly type = '[ADD FOOD] Load editing food';

  constructor(public readonly id: number) {
  }
}

export class EditingFoodLoadedEvent {
  static readonly type = '[ADD FOOD] Editing food loaded';

  constructor(public readonly food: IFood) {
  }
}

export class EditingFoodLoadingFailedEvent {
  static readonly type = '[ADD FOOD] Editing food loading failed';

  constructor(public readonly msg: string) {
  }
}
