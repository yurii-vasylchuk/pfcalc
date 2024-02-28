import {DateTime} from 'luxon';
import {IPfcc} from '../../commons/models/common.models';
import {FoodType, IMeasurement} from '../../commons/models/domain.models';

export namespace AddMeal {
  export type IAddMealState = {
    filter: string | null;
    date: DateTime;
    options: IMealOption[];
    nutrients: IPfcc;
    optionsPage: number;
    optionsPageSize: number;
    optionsTotalPages: number;
  }

  export type MealOptionType = 'DISH' | FoodType;

  export type IMealOption = {
    foodId: number;
    dishId: number | null;
    name: string;
    type: MealOptionType;
    pfcc: IPfcc;
    ownedByUser: boolean;
    measurements: IMeasurement[];
  }

  export const LOAD_MEAL_OPTIONS = '[AddMeal] Load meal options';
  export const LOAD_MORE_MEAL_OPTIONS = '[AddMeal] Load more meal options';
  export const DELETE_DISH = '[AddMeal] Delete dish';

  export type LoadMealOptionsPayload = {
    filter: string;
    page: number;
    pageSize: number;
  };

  export type DeleteDishPayload = number;
}
