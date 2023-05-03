import {DateTime} from 'luxon';
import {IPfcc} from './common.models';
import {IAccount} from './auth.models';

interface IBaseFood {
  id: number;
  name: string;
  description?: string;
  pfcc: IPfcc;
  hidden: boolean;
  ownedByUser: boolean;
  type: FoodType;
}

export type IIngredient = (IFood & {
  ingredientWeight: number
});

export type IFood =
  (IBaseFood & {
    type: 'ingredient',
    consistOf: null
  }) |
  (IBaseFood & {
    type: 'recipe',
    consistOf: IIngredient[]
  });

export type FoodType = 'ingredient' | 'recipe';

export interface IDish {
  id: number;
  cookedOn: DateTime;
  pfcc: IPfcc;
  name: string;
  foodId: number;
  recipeWeight: number;
  cookedWeight: number;
}

export interface IMeal {
  id: number | null;
  eatenOn: DateTime;
  weight: number;
  pfcc: IPfcc;
  foodId: number;
  dishId: number | null;
}

export interface IProfile {
  aims: IPfcc;
  base: IPfcc | null;
  profileConfigured: boolean;
}

export interface IProfileResponse extends IProfile {
  meals: IMeal[];
  dishes: IDish[];
  foods: IFood[];
  account: IAccount;
}

export interface IProfileStatistics {
  nutrients: {
    weeklyAverage: IPfcc,
    monthlyAverage: IPfcc
  }
}
