import {Selector, State, StateContext} from '@ngxs/store'
import {AddDish} from './add-dish.state-models'
import {Injectable} from '@angular/core'
import {ApiService} from '../../service/api.service'
import {EmitterAction, Receiver} from '@ngxs-labs/emitter'
import {RouterNavigated} from '@ngxs/router-plugin'
import {EMPTY, map, of, tap} from 'rxjs'
import * as fromRoutes from '../../commons/routes'
import {IDish, IFood} from '../../commons/models/domain.models'
import {Navigation} from '../../state/navigation.state-model'
import {DateTime} from 'luxon'


@State<AddDish.IAddDishState>({
  name: 'addDish',
  defaults: {
    recipeId: null,
    dishId: null,
    ingredientOptions: [],
    initialization: null,
  },
})
@Injectable()
export class AddDishState {
  private static api: ApiService
  private static defaultOptions: IFood[] = []

  constructor(private api: ApiService) {
    AddDishState.api = api

    api.loadFoodsList(0, AddDish.OPTIONS_PAGE_SIZE)
      .pipe(
        map(page => page.data),
      )
      .subscribe(foods => AddDishState.defaultOptions = foods)
  }

  @Selector()
  static options(state: AddDish.IAddDishState): IFood[][] {
    return state.ingredientOptions
  }

  @Selector()
  static initialization(state: AddDish.IAddDishState): IDish {
    return state.initialization
  }

  @Receiver({action: RouterNavigated})
  static handleNavigation(ctx: StateContext<AddDish.IAddDishState>, action: RouterNavigated) {
    ctx.patchState({
      initialization: null,
      ingredientOptions: [],
      dishId: null,
      recipeId: null,
    })

    if (!action.routerState.url.match(`/${fromRoutes.addDish}.*`)) {
      return EMPTY
    }

    const recipeIdParam = action.routerState.root.queryParams?.['recipeId']
    const dishIdParam = action.routerState.root.queryParams?.['dishId']
    if (recipeIdParam == null && dishIdParam == null) {
      console.error(`One of query parameters 'recipeId' or 'dishId' is required`)
      return of(new EmitterAction(null, Navigation.NAVIGATE_BACK))
    }

    if (recipeIdParam != null) {
      const recipeId = parseInt(recipeIdParam)
      if (isNaN(recipeId)) {
        console.error(`Parameter 'recipeId' should number`)
        return of(new EmitterAction(null, Navigation.NAVIGATE_BACK))
      }

      return ctx.dispatch(new EmitterAction(recipeId, AddDish.LOAD_RECIPE))
    }

    if (dishIdParam != null) {
      const dishId = parseInt(dishIdParam)
      if (isNaN(dishId)) {
        console.error(`Parameter 'dishId' should number`)
        return of(new EmitterAction(null, Navigation.NAVIGATE_BACK))
      }

      return ctx.dispatch(new EmitterAction(dishId, AddDish.LOAD_DISH))
    }

    throw new Error('Shouldn\' happen')
  }

  @Receiver({type: AddDish.LOAD_RECIPE})
  static loadRecipe(ctx: StateContext<AddDish.IAddDishState>, {payload}: EmitterAction<AddDish.LoadRecipePayload>) {
    return this.api.loadFood(payload)
      .pipe(
        tap(recipe => {
          const now = DateTime.now()
          const recipeWeight = recipe.ingredients.map(i => i.ingredientWeight).reduce((a, b) => a + b, 0)
          ctx.patchState({
            recipeId: recipe.id,
            dishId: null,
            initialization: {
              id: null,
              foodId: recipe.id,
              name: `${recipe.name} ${now.toFormat('LLL dd')}`,
              recipeWeight: recipeWeight,
              cookedWeight: recipeWeight,
              pfcc: {...recipe.pfcc},
              cookedOn: now,
              deleted: false,
              ingredients: [...recipe.ingredients],
            },
            ingredientOptions: recipe.ingredients.map(_ => ([...this.defaultOptions])),
          })
        }),
      )
  }

  @Receiver({type: AddDish.LOAD_DISH})
  static loadDish(ctx: StateContext<AddDish.IAddDishState>, {payload}: EmitterAction<AddDish.LoadDishPayload>) {
    return this.api.loadDish(payload)
      .pipe(
        tap(dish => ctx.patchState({
          recipeId: dish.foodId,
          dishId: dish.id,
          initialization: dish,
          ingredientOptions: dish.ingredients.map(_ => ([...this.defaultOptions])),
        })),
      )
  }

  @Receiver({type: AddDish.ADD_INGREDIENT})
  static addIngredient(ctx: StateContext<AddDish.IAddDishState>, _: EmitterAction<AddDish.AddIngredientPayload>) {
    const options = ctx.getState().ingredientOptions

    ctx.patchState({
      ingredientOptions: [...options, [...this.defaultOptions]],
    })
  }

  @Receiver({type: AddDish.DELETE_INGREDIENT})
  static deleteIngredient(ctx: StateContext<AddDish.IAddDishState>, {payload}: EmitterAction<AddDish.DeleteIngredientPayload>) {
    const newOptions = ctx.getState().ingredientOptions.filter(((_, idx) => idx !== payload))

    ctx.patchState({
      ingredientOptions: newOptions,
    })
  }

  @Receiver({type: AddDish.SEARCH_INGREDIENT_OPTIONS})
  static searchIngredientOptions(ctx: StateContext<AddDish.IAddDishState>, {payload}: EmitterAction<AddDish.SearchIngredientOptionsPayload>) {
    const {filter, index, id} = payload
    const state = ctx.getState()
    return this.api.loadFoodsList(0, AddDish.OPTIONS_PAGE_SIZE, filter)
      .pipe(
        tap(page => ctx.patchState({
          ingredientOptions: [
            ...state.ingredientOptions.slice(0, index),
            page.data.filter(f => f.id !== id),
            ...state.ingredientOptions.slice(index + 1, state.ingredientOptions.length),
          ],
        })),
      )
  }

  @Receiver({type: AddDish.SAVE_DISH})
  static saveDish(ctx: StateContext<AddDish.IAddDishState>, {payload}: EmitterAction<AddDish.SaveDishPayload>) {
    const state = ctx.getState()

    return (state.dishId == null ?
      this.api.addDish(payload) :
      this.api.updateDish(state.dishId, payload)).pipe(
      map(dish => {
        return new EmitterAction<Navigation.NavigateBackPayload>({additionalQueryParams: {dishId: dish.id}}, Navigation.NAVIGATE_BACK)
      }),
      map(ctx.dispatch),
    )
  }
}
