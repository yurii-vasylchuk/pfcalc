import {DateTime} from 'luxon'
import {IPfcc} from '../../commons/models/common.models'
import {FoodType, IFoodIngredient, IMeal, IMeasurement} from '../../commons/models/domain.models'

export namespace AddMeal {
  export type IAddMealState = {
    filter: string | null;
    date: DateTime;
    options: IMealOption[];
    nutrients: IPfcc;
    optionsPage: number;
    optionsPageSize: number;
    optionsTotalPages: number;
    selectedOption: number | null;
    selectedOptionIngredients: IFoodIngredient[];
  }

  export type IMealOption = {
    foodId: number;
    name: string;
    type: FoodType;
    pfcc: IPfcc;
    ownedByUser: boolean;
    measurements: IMeasurement[];
  }

  export const LOAD_MEAL_OPTIONS = '[AddMeal] Load meal options'
  export const LOAD_MORE_MEAL_OPTIONS = '[AddMeal] Load more meal options'
  export const SAVE_MEAL = '[AddMeal] Save meal'
  export const SELECT_MEAL_OPTION = '[AddMeal] Select meal option'
  export const LOAD_OPTION_INGREDIENTS = '[AddMeal] Load meal option ingredients'

  export type LoadMealOptionsPayload = {
    filter: string;
    page: number;
    pageSize: number;
  };

  export type SaveMealPayload =
    Omit<IMeal, 'id' | 'weight' | 'ingredients'>
    & Partial<Pick<IMeal, 'weight' | 'ingredients'>>;

  export type SelectOptionPayload = number;
}
