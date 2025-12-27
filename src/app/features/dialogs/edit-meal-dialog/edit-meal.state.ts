import {EditMeal} from './edit-meal.state-models'
import {Selector, State, StateContext, Store} from '@ngxs/store'
import {inject, Injectable} from '@angular/core'
import {ApiService} from '../../../service/api.service'
import {EmitterAction, Receiver} from '@ngxs-labs/emitter'
import {catchError, EMPTY, tap} from 'rxjs'
import {AlertService} from '../../../service/alert.service'
import {defaultMeasurement, IFood} from '../../../commons/models/domain.models'

@State<EditMeal.State>({
  name: 'editMeal',
  defaults: {
    food: null,
  },
})
@Injectable({providedIn: 'root'})
export class EditMealState {
  private static api: ApiService
  private static alert: AlertService
  private store = inject(Store)

  constructor() {
    EditMealState.api = inject(ApiService)
    EditMealState.alert = inject(AlertService)
  }

  @Selector()
  static food(state: EditMeal.State): IFood {
    return state.food
  }

  @Receiver({type: EditMeal.LOAD_FOOD})
  static loadFood(ctx: StateContext<EditMeal.State>, {payload}: EmitterAction<EditMeal.LoadFoodPayload>) {
    return this.api.loadFood(payload.id)
      .pipe(
        tap(food => {
          if (food.ingredients != null) {
            food.ingredients.forEach(ingredient => {
              if (ingredient.ingredientWeight.measurementId == null) {
                ingredient.ingredientWeight = {
                  ...ingredient.ingredientWeight,
                  measurementId: defaultMeasurement.id,
                  measurementName: defaultMeasurement.name,
                  measurementCount: ingredient.ingredientWeight.inGram,
                }
              }
            })
          }
          ctx.patchState({
            food,
          })
        }),
        catchError(err => {
          console.error(err)
          this.alert.warn('alert.default-error')

          return EMPTY
        }),
      )

  }
}
