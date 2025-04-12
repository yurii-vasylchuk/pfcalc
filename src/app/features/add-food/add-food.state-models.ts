import {IFood} from '../../commons/models/domain.models'

export namespace AddFood {
  export type IAddFoodState = {
    formInitialization: Partial<IFood>;
    defaultIngredientOptions: IFood[],
    ingredientOptions: {
      ingredientSearch: string;
      ingredients: IFood[];
    }[];
  }


  export const RELOAD_INGREDIENT_OPTIONS_ACTION = '[AddFood] Reload ingredients options'
  export const SAVE_FOOD_ACTION = '[AddFood] Save food'
  export const DROP_MEASUREMENTS_ACTION = '[AddFood] Drop measurements'


  export type ReloadIngredientOptionsPayload = {
    searchString: string;
    selectedIngredient: IFood;
  }[];

  export type SaveFoodPayload = IFood;

  export type DropMeasurementsPayload = number[];
}
