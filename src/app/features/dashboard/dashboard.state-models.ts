import {IPfcc} from '../../commons/models/common.models';
import {DateTime} from 'luxon';
import {IMeal} from '../../commons/models/domain.models';

export namespace Dashboard {
  export type IDashboardState = {
    aims: IPfcc;
    weekMeals: IMeal[];
    currentDate: string;
  }

  export const REMOVE_MEAL = '[DASHBOARD] Remove meal';
  export const ADD_MEAL = '[DASHBOARD] Add meal';
  export const SWITCH_DATE = '[DASHBOARD] Switch date';

  export type RemoveMealPayload = {
    id: number;
  }
  export type AddMealPayload = Omit<IMeal, 'id'>;
  export type SwitchDatePayload = {
    date: DateTime;
  }
}
