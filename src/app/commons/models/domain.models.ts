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
  isCookable: boolean;
}

export type IFood =
  (IBaseFood & {
    type: 'ingredient',
    consistOf: null
  }) |
  (IBaseFood & {
    type: 'recipe',
    consistOf: IFood[]
  });

export type FoodType = 'ingredient' | 'recipe';

export interface IDish {
  id: number;
  cookedOn: DateTime;
  name: string;
  foodId: number;
  recipeWeight: number;
  cookedWeight: number;
}

interface IBaseMeal {
  id: number;
  eatenOn: DateTime;
  weight: number;
  pfcc: IPfcc;
  foodId: number;
}

export type IMeal =
  (IBaseMeal & { cooked: true, dishId: number }) |
  (IBaseMeal & { cooked: false, dishId: null });

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
