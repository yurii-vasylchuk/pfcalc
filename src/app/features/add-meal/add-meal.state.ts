import {Selector, State, StateContext} from '@ngxs/store'
import {AddMeal} from './add-meal.state-models'
import {ApiService} from '../../service/api.service'
import {EmitterAction, Receiver} from '@ngxs-labs/emitter'
import {RouterNavigated} from '@ngxs/router-plugin'
import * as fromRoutes from '../../commons/routes'
import {inject, Injectable} from '@angular/core'
import {DateTime} from 'luxon'
import {catchError, EMPTY, map, switchMap, tap} from 'rxjs'
import {loadAllPages, sumPfccs} from '../../commons/functions'
import {emptyPfcc, IPfcc} from '../../commons/models/common.models'
import {Navigation} from '../../state/navigation.state-model'
import {AlertService} from '../../service/alert.service'
import {IFoodIngredient} from '../../commons/models/domain.models'


@State<AddMeal.IAddMealState>({
  name: 'addMeal',
  defaults: {
    filter: null,
    date: null,
    nutrients: emptyPfcc,
    options: [],
    optionsPage: 0,
    optionsPageSize: 15,
    optionsTotalPages: null,
    selectedOption: null,
    selectedOptionIngredients: [],
  },
})
@Injectable({providedIn: 'root'})
export class AddMealState {
  private static api: ApiService
  private static alert: AlertService

  constructor() {
    AddMealState.api = inject(ApiService)
    AddMealState.alert = inject(AlertService)
  }

  @Selector()
  static options(state: AddMeal.IAddMealState): AddMeal.IMealOption[] {
    //TODO: Remove
    const aMap = state.options.map(option => option.foodId).reduce((map, id) => {
      const count = map.get(id)
      map.set(id, (count ?? 0) + 1)
      return map
    }, new Map<number, number>())

    aMap.forEach((count, id) => {
      if (count > 1) {
        console.log(`ID: ${id}; COUNT: ${count}`)
      }
    })

    return state.options
  }

  @Selector()
  static moreDataAvailable(state: AddMeal.IAddMealState): boolean {
    return state.optionsPage < (state.optionsTotalPages - 1)
  }

  @Selector()
  static nutrients(state: AddMeal.IAddMealState): IPfcc {
    return state.nutrients
  }

  @Selector()
  static date(state: AddMeal.IAddMealState): DateTime {
    return state.date
  }

  @Selector()
  static optionIngredients(state: AddMeal.IAddMealState): IFoodIngredient[] {
    return state.selectedOptionIngredients
  }

  @Receiver({action: RouterNavigated})
  static onNavigate(ctx: StateContext<AddMeal.IAddMealState>, action: RouterNavigated) {
    if (!action.routerState.url.match(`/${fromRoutes.addMeal}.*`)) {
      return EMPTY
    }

    const dateStr = action.routerState.root.queryParams?.['date']
    const date = dateStr ? DateTime.fromISO(dateStr) : DateTime.now()
    ctx.patchState({
      filter: null,
      date: date,
    })


    return loadAllPages((page, pageSize) => this.api.loadMeals(page, pageSize, date.startOf('day'), date.endOf('day')), 10)
      .pipe(
        map(meals => sumPfccs(emptyPfcc, ...meals.map(m => m.pfcc))),
        tap(nutrients => ctx.patchState({nutrients})),
      )
  }

  @Receiver({type: AddMeal.LOAD_MEAL_OPTIONS, cancelUncompleted: true})
  static loadMealOptions(ctx: StateContext<AddMeal.IAddMealState>, {payload}: EmitterAction<AddMeal.LoadMealOptionsPayload>) {
    const filter = payload.filter
    const page = payload.page
    const pageSize = payload.pageSize

    return AddMealState.api.getMealOptions(filter, page, pageSize)
      .pipe(
        tap((res) => {
          ctx.patchState({
            options: res.data,
            optionsPage: res.page,
            optionsPageSize: res.pageSize,
            optionsTotalPages: res.totalPages,
          })
        }),
        catchError(err => {
          console.warn('Error while loading meal options: ', err)
          this.alert.warn('alert.default-error')


          return EMPTY
        }),
      )
  }

  @Receiver({type: AddMeal.LOAD_MORE_MEAL_OPTIONS})
  static loadMoreMealOptions(ctx: StateContext<AddMeal.IAddMealState>, _: EmitterAction) {
    const state = ctx.getState()

    let page = state.optionsPage + 1
    let pageSize = state.optionsPageSize

    if (page >= state.optionsTotalPages) {
      console.error('Can\'t load more meal options: all data is loaded')
    }

    return this.api.getMealOptions(state.filter, page, pageSize)
      .pipe(
        tap(rsp => {
          ctx.patchState({
            options: [
              ...state.options,
              ...rsp.data,
            ],
            optionsPage: page,
            optionsTotalPages: rsp.totalPages,
          })
        }),
        catchError(err => {
          console.warn('Error while loading meal options: ', err)
          this.alert.warn('alert.default-error')

          return EMPTY
        }),
      )
  }

  @Receiver({type: AddMeal.SAVE_MEAL})
  static saveMeal(ctx: StateContext<AddMeal.IAddMealState>, {payload}: EmitterAction<AddMeal.SaveMealPayload>) {
    const base = {
      foodId: payload.foodId,
      eatenOn: payload.eatenOn,
    }

    const command = payload.ingredients != null && payload.ingredients.length > 0 ? {
      ...base,
      ingredients: payload.ingredients,
    } : {
      ...base,
      weight: payload.weight,
    }
    return this.api.saveMeal(command)
      .pipe(
        map(meal => {
          return {
            type: Navigation.NAVIGATE_BACK,
            payload: {
              additionalQueryParams: {
                savedMealId: meal.id,
              },
            } as Navigation.NavigateBackPayload,
          }
        }),
        catchError(err => {
          console.warn('Error while saving meal: ', err)
          this.alert.warn('alert.default-error')

          return EMPTY
        }),
        switchMap(ctx.dispatch),
      )
  }

  @Receiver({type: AddMeal.SELECT_MEAL_OPTION})
  static selectOption(ctx: StateContext<AddMeal.IAddMealState>, {payload}: EmitterAction<AddMeal.SelectOptionPayload>) {
    ctx.patchState({
      selectedOption: payload,
      selectedOptionIngredients: [],
    })

    if (ctx.getState().options.find(o => o.foodId === payload)?.type === 'RECIPE') {
      return ctx.dispatch({
        type: AddMeal.LOAD_OPTION_INGREDIENTS,
      })
    }

    return EMPTY
  }

  @Receiver({type: AddMeal.LOAD_OPTION_INGREDIENTS})
  static loadOptionIngredients(ctx: StateContext<AddMeal.IAddMealState>, _: EmitterAction) {
    const foodId = ctx.getState().selectedOption

    return this.api.loadFood(foodId)
      .pipe(
        tap(food => {
          ctx.patchState({
            selectedOptionIngredients: food.ingredients,
          })
        }),
        catchError(err => {
          console.warn('Error while loading ingredients list: ', err)
          this.alert.warn('alert.default-error')

          ctx.patchState({
            selectedOptionIngredients: [],
          })

          return EMPTY
        }),
      )
  }
}
