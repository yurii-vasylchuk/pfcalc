import {DateTime} from 'luxon';
import {IPfcc} from './common.models';
import {Language} from './auth.models';

export type IIngredient = (IFood & {
  ingredientWeight: number
});

export type IFood ={
  id: number;
  name: string;
  description?: string;
  pfcc: IPfcc;
  hidden: boolean;
  ownedByUser: boolean;
  type: FoodType;
  ingredients: IIngredient[]
  measurements: IMeasurement[]
}

export type FoodType = 'INGREDIENT' | 'RECIPE';

export function isFoodType(input: string): input is FoodType {
  return ['RECIPE', 'INGREDIENT'].includes(input);
}

export interface IDish {
  id: number;
  cookedOn: DateTime;
  pfcc: IPfcc;
  name: string;
  foodId: number;
  ingredients: IIngredient[];
  recipeWeight: number;
  cookedWeight: number;
  deleted: boolean;
}

export interface IMeal {
  id: number | null;
  name: string;
  eatenOn: DateTime;
  weight: number;
  pfcc: IPfcc;
  foodId: number;
  dishId: number | null;
}

export interface IProfile {
  email: string;
  name: string;
  preferredLanguage: Language;
  aims: IPfcc;
  profileConfigured: boolean;
}

export interface IDishToCreate {
  cookedOn: DateTime;
  name: string;
  foodId: number;
  ingredients: {
    id: number;
    ingredientWeight: number;
  }[];
  cookedWeight: number;
}

export type IMeasurement = {
  id: number;
  foodId: number;
  name: string;
  defaultValue: number;
  toGramMultiplier: number;
};
