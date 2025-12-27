import {IFood} from '../../../commons/models/domain.models'

export namespace EditMeal {
  export type State = {
    food: IFood,
  }

  export const LOAD_FOOD = '[EditMeal] Load food'

  export type LoadFoodPayload = {
    id: number;
  }
}
