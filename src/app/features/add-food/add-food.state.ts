import {Injectable} from '@angular/core'
import {NgxsOnInit, Selector, State, StateContext} from '@ngxs/store'
import {AddFood} from './add-food.state-models'
import {ApiService} from '../../service/api.service'
import {EmitterAction, Receiver} from '@ngxs-labs/emitter'
import {RouterNavigated} from '@ngxs/router-plugin'
import * as fromRoutes from '../../commons/routes'
import {FoodType, IFood, IMeasurement, isFoodType} from '../../commons/models/domain.models'
import {catchError, combineLatest, EMPTY, map, Observable, of, switchMap, tap} from 'rxjs'
import {Navigation} from '../../state/navigation.state-model'
import {log} from '@angular-devkit/build-angular/src/builders/ssr-dev-server'

@State<AddFood.IAddFoodState>({
  name: 'addFood',
  defaults: {
    formInitialization: null,
    defaultIngredientOptions: [],
    ingredientOptions: [],
  },
})
@Injectable()
export class AddFoodState implements NgxsOnInit {
  private static readonly INGREDIENT_OPTIONS_PAGE_SIZE = 10
  private static api: ApiService

  constructor(private api: ApiService) {
    AddFoodState.api = api
  }

  ngxsOnInit(ctx: StateContext<AddFood.IAddFoodState>): void {
    this.api.loadFoodsList(0, AddFoodState.INGREDIENT_OPTIONS_PAGE_SIZE)
      .pipe(
        map(rsp => rsp.data),
      )
      .subscribe(opts => ctx.patchState({defaultIngredientOptions: opts}))
  }

  @Selector()
  static initializationVector(state: AddFood.IAddFoodState): Partial<IFood> {
    return state.formInitialization
  }

  @Selector()
  static ingredients(state: AddFood.IAddFoodState): IFood[][] {
    return state.ingredientOptions.map(opt => opt.ingredients)
  }

  @Receiver({action: RouterNavigated})
  static onNavigate(ctx: StateContext<AddFood.IAddFoodState>, action: RouterNavigated): Observable<void> {
    ctx.patchState({
      ingredientOptions: [],
      formInitialization: null,
    })
    if (!action.routerState.url.match(`/${fromRoutes.addFood}.*`)) {
      return EMPTY
    }

    const {id, type, name} = action.routerState.root.queryParams

    if (id != null) {
      return this.api.loadFood(Number.parseInt(id))
        .pipe(
          tap(food => ctx.patchState({
            formInitialization: food,
          })),
          switchMap(food => {
            const sources: Observable<IFood[]>[] = (food.ingredients ?? [])
              .map(ingredient => this.api.loadFoodsList(0, 10)
                .pipe(map(page => [ingredient, ...page.data])))
            return combineLatest(sources)
          }),
          tap(ingredients => ctx.patchState({
            ingredientOptions: ingredients.map(opts => ({
              ingredients: opts,
              ingredientSearch: null,
            })),
          })),
          map(_ => null),
        )
    } else {
      let foodType: FoodType = null

      if (isFoodType(type)) {
        foodType = type
      } else if (type != null) {
        console.error(`'${type}' can't be casted to FootType`)
      }

      ctx.patchState({
        formInitialization: {
          name: name,
          type: foodType,
        },
      })
    }

    return EMPTY
  }

  @Receiver({type: AddFood.DROP_MEASUREMENTS_ACTION})
  static dropMeasurements(ctx: StateContext<AddFood.IAddFoodState>, {payload}: EmitterAction<AddFood.DropMeasurementsPayload>): Observable<void> {
    return combineLatest(
      payload.map(id => this.api.dropMeasurement(id)
        .pipe(
          catchError(err => {
            console.error(`Unable to drop measurement ${id}; error: ${err}`)
            return of(null)
          })
        )
      ),
    ).pipe(
      map(_ => null),
    )
  }

  @Receiver({type: AddFood.RELOAD_INGREDIENT_OPTIONS_ACTION})
  static reloadIngredientOptions(ctx: StateContext<AddFood.IAddFoodState>, {payload}: EmitterAction<AddFood.ReloadIngredientOptionsPayload>): void {
    //TODO: Optimize
    const {defaultIngredientOptions} = ctx.getState()
    let options$: Observable<IFood[]>[] = []

    payload.forEach(optionsReq => {
      if (optionsReq.searchString == null || optionsReq.searchString.trim().length == 0) {
        options$.push(of([
          optionsReq.selectedIngredient,
          ...defaultIngredientOptions.filter(dio => dio.id !== optionsReq?.selectedIngredient?.id),
        ].filter(opt => opt != null)))
        return
      }

      options$.push(
        this.api.loadFoodsList(0, AddFoodState.INGREDIENT_OPTIONS_PAGE_SIZE, optionsReq.searchString.trim())
          .pipe(map(rsp => [
            optionsReq.selectedIngredient,
            ...rsp.data.filter(rspOpt => rspOpt.id !== optionsReq.selectedIngredient?.id),
          ].filter(opt => opt != null))),
      )
    })

    combineLatest(options$).subscribe(options => ctx.patchState({
      ingredientOptions: options.map((options, idx) => ({
        ingredientSearch: ctx.getState().ingredientOptions[idx]?.ingredientSearch,
        ingredients: options,
      })),
    }))
  }

  @Receiver({type: AddFood.SAVE_FOOD_ACTION})
  static saveFood(ctx: StateContext<AddFood.IAddFoodState>, {payload}: EmitterAction<AddFood.SaveFoodPayload>): Observable<void> {
    return this.api.saveFood(payload).pipe(
      switchMap(savedFood => {
        if (payload.measurements == null || payload.measurements.length === 0) {
          return of(savedFood)
        }
        return this.saveMeasurements(savedFood, payload.measurements)
      }),
      map(food => new EmitterAction({additionalQueryParams: {selectedFoodId: food.id}} as Navigation.NavigateBackPayload, Navigation.NAVIGATE_BACK)),
      switchMap(ctx.dispatch),
    )
  }

  private static saveMeasurements(food: IFood, measurements: IMeasurement[]): Observable<IFood> {
    return combineLatest(
      measurements
        .map(m => ({...m, foodId: food.id}))
        .map(m => this.api.saveMeasurement(m)),
    ).pipe(map(_ => (food)))
  }
}
