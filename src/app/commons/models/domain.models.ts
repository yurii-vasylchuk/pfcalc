import {DateTime} from 'luxon'
import {IPfcc} from './common.models'
import {Language} from './auth.models'

export type IIngredient = (IFood & {
  ingredientWeight: number;
  ingredientIndex: number;
});

export type IFood = {
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
  return ['RECIPE', 'INGREDIENT'].includes(input)
}

export interface IMeal {
  id: number | null;
  name: string;
  eatenOn: DateTime;
  weight: number;
  pfcc: IPfcc;
  foodId: number;
}

export interface IProfile {
  email: string;
  name: string;
  preferredLanguage: Language;
  aims: IPfcc;
}

export type IProfileUpdate = Partial<Pick<IProfile, 'aims' | 'name' | 'preferredLanguage'> & {
  currentPassword: string;
  newPassword: string
}>

export type IMeasurement = {
  id: number;
  foodId: number;
  name: string;
  defaultValue: number;
  toGramMultiplier: number;
};

export const defaultMeasurement: IMeasurement = {
  foodId: null,
  id: 99999,
  toGramMultiplier: 1,
  name: 'g',
  defaultValue: 100,
}

export type IReport = {
  id: number;
  name: string;
  status: ReportStatus;
  type: ReportType;
};

export type ReportStatus = 'INITIALIZED' | 'GENERATED';
export type ReportType = 'PERIOD';

export const WeeklyNutrientsTypes = ['TOTAL', 'AVERAGE'] as const
export type WeeklyNutrientsType = typeof WeeklyNutrientsTypes[number];
export const defaultWeeklyNutrientsType = 'AVERAGE'

export function isWeeklyNutrientsType(value: string): value is WeeklyNutrientsType {
  return value === 'TOTAL' as WeeklyNutrientsType || value === 'AVERAGE'
}
