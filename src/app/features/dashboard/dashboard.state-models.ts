import {IPfcc} from '../../commons/models/common.models'
import {DateTime} from 'luxon'
import {IFood, IMeal, IMeasurement, WeeklyNutrientsType} from '../../commons/models/domain.models'

export namespace Dashboard {
  export type IDashboardState = {
    aims: IPfcc;
    weekMeals: IMeal[];
    currentDate: string;
    weeklyNutrientsType: WeeklyNutrientsType;
    measurements: Map<number, IMeasurement[]>;
    food: IFood;
  }

  export const REMOVE_MEAL = '[Dashboard] Remove meal'
  export const SWITCH_DATE = '[Dashboard] Switch date'
  export const EDIT_MEAL = '[Dashboard] Edit meal'
  export const SWITCH_WEEKLY_NUTRIENTS_TYPE = '[Dashboard] Switch weekly nutrients type'

  export type RemoveMealPayload = {
    id: number;
  }
  export type AddMealPayload = Omit<IMeal, 'id'>;
  export type SwitchDatePayload = {
    date: DateTime;
  }

  export type SwitchWeeklyNutrientsTypePayload = WeeklyNutrientsType
  export type EditMealPayload = IMeal
}
