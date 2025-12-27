import {IMeal, IMealIngredient, IWeight} from '../../commons/models/domain.models'
import {DateTime} from 'luxon'
import {WithOptional} from '../../commons/models/common.models'

export type IMealCommandDto = {
  id?: number;
  eatenOn: DateTime;
  foodId: number;
} & (
  | { weight: IWeight; ingredients?: never; }
  | { weight?: never; ingredients: IMealIngredient[]; }
  );

export function fromMeal(meal: WithOptional<IMeal, 'id'>): IMealCommandDto {
  const base = {
    id: meal.id,
    foodId: meal.foodId,
    eatenOn: meal.eatenOn,
  }
  return meal.ingredients == null || meal.ingredients.length === 0 ?
    {
      ...base,
      weight: meal.weight,
    } : {
      ...base,
      ingredients: meal.ingredients,
    }
}
