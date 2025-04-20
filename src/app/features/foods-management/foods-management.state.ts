import {Selector, State, StateContext} from '@ngxs/store'
import {FoodsManagement, IFoodsManagementState} from './foods-management.state-models'
import {inject, Injectable} from '@angular/core'
import {Emittable, Emitter, EmitterAction, Receiver} from '@ngxs-labs/emitter'
import {ApiService} from '../../service/api.service'
import {catchError, EMPTY, Observable, switchMap, tap} from 'rxjs'
import {IFood} from '../../commons/models/domain.models'
import {AlertService} from '../../service/alert.service'
import LoadFoodsActionPayload = FoodsManagement.LoadFoodsActionPayload

@State<IFoodsManagementState>({
  name: 'foodsManagement',
  defaults: {
    products: null,
    recipes: null,
  },
})
@Injectable()
export class FoodsManagementState {
  @Emitter(FoodsManagementState.loadProducts)
  private static loadProductsEmitter: Emittable<FoodsManagement.LoadFoodsActionPayload>
  @Emitter(FoodsManagementState.loadRecipes)
  private static loadRecipesEmitter: Emittable<FoodsManagement.LoadFoodsActionPayload>

  private static api: ApiService
  private static alert: AlertService

  constructor() {
    FoodsManagementState.api = inject(ApiService)
    FoodsManagementState.alert = inject(AlertService)
  }

  @Selector()
  static products(state: IFoodsManagementState): IFood[] {
    return state.products?.data ?? []
  }

  @Selector()
  static recipes(state: IFoodsManagementState): IFood[] {
    return state.recipes?.data ?? []
  }

  @Selector()
  static moreProductsAvailable(state: IFoodsManagementState): boolean {
    if (state.products == null) {
      return true
    }
    return state.products.page < state.products.totalPages - 1
  }

  @Selector()
  static moreRecipesAvailable(state: IFoodsManagementState): boolean {
    if (state.recipes == null) {
      return true
    }
    return state.recipes.page < state.recipes.totalPages - 1
  }

  @Receiver({type: FoodsManagement.LOAD_MORE_PRODUCTS})
  static loadMoreProducts(ctx: StateContext<IFoodsManagementState>): Observable<unknown> {
    const productsState = ctx.getState().products

    if (productsState.page >= productsState.totalPages - 1) {
      this.alert.warn('alert.default-error')

      return EMPTY
    }

    return this.api.loadFoodsList(productsState.page + 1, productsState.pageSize, productsState.name, 'INGREDIENT')
      .pipe(
        tap(rsp => {
          ctx.patchState({
            products: {
              data: [...productsState.data, ...rsp.data],
              page: rsp.page,
              pageSize: rsp.pageSize,
              totalElements: rsp.totalElements,
              totalPages: rsp.totalPages,
              name: productsState.name,
            },
          })
        }),
      )
  };

  @Receiver({type: FoodsManagement.LOAD_PRODUCTS})
  static loadProducts(ctx: StateContext<IFoodsManagementState>,
                      {payload}: EmitterAction<FoodsManagement.LoadFoodsActionPayload>): Observable<unknown> {
    return FoodsManagementState.api.loadFoodsList(payload.page, payload.pageSize, payload.name, 'INGREDIENT')
      .pipe(
        tap(rsp => {
          ctx.patchState({
            products: {
              data: rsp.data,
              page: rsp.page,
              pageSize: rsp.pageSize,
              totalElements: rsp.totalElements,
              totalPages: rsp.totalPages,
              name: payload.name,
            },
          })
        }),
        catchError(err => {
          console.error('Loading products failed', err)
          return EMPTY
        }),
      )
  }

  @Receiver({type: FoodsManagement.LOAD_MORE_RECIPES})
  static loadMoreRecipes(ctx: StateContext<IFoodsManagementState>): Observable<unknown> {
    const recipesState = ctx.getState().recipes

    if (recipesState.page >= recipesState.totalPages - 1) {
      return EMPTY
    }

    return this.api.loadFoodsList(recipesState.page + 1, recipesState.pageSize, recipesState.name, 'RECIPE')
      .pipe(
        tap(rsp => {
          ctx.patchState({
            recipes: {
              data: [...recipesState.data, ...rsp.data],
              page: rsp.page,
              pageSize: rsp.pageSize,
              totalElements: rsp.totalElements,
              totalPages: rsp.totalPages,
              name: recipesState.name,
            },
          })
        }),
      )
  }

  @Receiver({type: FoodsManagement.LOAD_RECIPES})
  static loadRecipes(ctx: StateContext<IFoodsManagementState>,
                     {payload}: EmitterAction<FoodsManagement.LoadFoodsActionPayload>): Observable<unknown> {
    return FoodsManagementState.api.loadFoodsList(payload.page, payload.pageSize, payload.name, 'RECIPE')
      .pipe(
        tap(rsp => {
          ctx.patchState({
            recipes: {
              data: rsp.data,
              page: rsp.page,
              pageSize: rsp.pageSize,
              totalElements: rsp.totalElements,
              totalPages: rsp.totalPages,
              name: payload.name,
            },
          })
        }),
        catchError(err => {
          console.error('Loading recipes failed', err)
          this.alert.warn('alert.default-error')
          return EMPTY
        }),
      )
  }

  @Receiver({type: FoodsManagement.CREATE_FOOD})
  static createFood(ctx: StateContext<IFoodsManagementState>, {payload}: EmitterAction<FoodsManagement.CreateFoodActionPayload>): Observable<unknown> {
    return FoodsManagementState.api.saveFood({
      ...payload,
      ownedByUser: true,
    }).pipe(
      tap(_ => {
        const {pageSize, name} = payload.type === 'INGREDIENT' ? ctx.getState().products : ctx.getState().recipes
        const loadFoodsPayload: LoadFoodsActionPayload = {
          page: 0,
          pageSize,
          name,
        }

        switch (payload.type) {
          case 'INGREDIENT':
            FoodsManagementState.loadProductsEmitter.emit(loadFoodsPayload)
            break
          case 'RECIPE':
            FoodsManagementState.loadRecipesEmitter.emit(loadFoodsPayload)
            break
          default:
            console.warn(`Unknown food type: ${payload.type}`)
        }
      }),
      catchError(err => {
        console.error('Creating food failed', err)
        this.alert.warn('alert.default-error')

        return EMPTY
      }),
    )

  }

  @Receiver({type: FoodsManagement.EDIT_FOOD})
  static editFood(ctx: StateContext<IFoodsManagementState>, {payload}: EmitterAction<FoodsManagement.EditFoodActionPayload>): Observable<unknown> {
    return FoodsManagementState.api.saveFood({...payload}).pipe(
      tap(food => {
        ctx.patchState({
          products: {
            ...ctx.getState().products,
            data: ctx.getState().products.data.map(f => f.id === payload.id ? food : f),
          },
          recipes: {
            ...ctx.getState().recipes,
            data: ctx.getState().recipes.data.map(f => f.id === payload.id ? food : f),
          },
        })
      }),
      catchError(err => {
        console.error('Editing food failed', err)
        this.alert.warn('alert.default-error')
        return EMPTY
      }),
    )
  }

  @Receiver({type: FoodsManagement.DELETE_FOOD})
  static deleteFood(ctx: StateContext<IFoodsManagementState>, {payload}: EmitterAction<FoodsManagement.DeleteFoodActionPayload>): Observable<unknown> {
    return FoodsManagementState.api.deleteFood(payload).pipe(
      switchMap(_ => {
        const s = ctx.getState()
        const foodType = s.recipes.data.find(f => f.id === payload) ?
          'RECIPE' : 'INGREDIENT'
        const pageSize = foodType === 'INGREDIENT' ?
          s.products.pageSize * (s.products.page + 1) :
          s.recipes.pageSize * (s.recipes.page + 1)
        const name = foodType === 'INGREDIENT' ? s.products.name : s.recipes.name


        return this.api.loadFoodsList(0, pageSize, name, foodType)
      }),
      tap(foods => {
        const foodType = ctx.getState().recipes.data.find(f => f.id === payload) ?
          'RECIPE' : 'INGREDIENT'
        switch (foodType) {
          case 'INGREDIENT':
            ctx.patchState({
              products: {
                ...ctx.getState().products,
                data: foods.data,
              },
            })
            break
          case 'RECIPE':
            ctx.patchState({
              recipes: {
                ...ctx.getState().recipes,
                data: foods.data,
              },
            })
            break
        }
      }),
      catchError(err => {
        console.error('Deleting food failed', err)
        this.alert.warn('alert.default-error')
        return EMPTY
      }),
    )
  }
}
