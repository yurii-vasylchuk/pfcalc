import {Selector, State, StateContext} from '@ngxs/store';
import {AddMeal} from './add-meal.state-models';
import {ApiService} from '../../service/api.service';
import {EmitterAction, Receiver} from '@ngxs-labs/emitter';
import {RouterNavigated} from '@ngxs/router-plugin';
import * as fromRoutes from '../../commons/routes';
import {Injectable} from '@angular/core';
import {DateTime} from 'luxon';
import {catchError, combineLatest, EMPTY, map, Observable, switchMap, tap} from 'rxjs';
import {loadAllPages, sumPfccs} from '../../commons/functions';
import {emptyPfcc, IPage, IPfcc} from '../../commons/models/common.models';
import {Navigation} from '../../state/navigation.state-model';
import IMealOption = AddMeal.IMealOption;


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
  },
})
@Injectable({providedIn: 'root'})
export class AddMealState {
  private static api: ApiService;

  @Selector()
  static options(state: AddMeal.IAddMealState): AddMeal.IMealOption[] {
    return state.options;
  }

  @Selector()
  static moreDataAvailable(state: AddMeal.IAddMealState): boolean {
    return state.optionsPage < (state.optionsTotalPages - 1);
  }

  @Selector()
  static nutrients(state: AddMeal.IAddMealState): IPfcc {
    return state.nutrients;
  }

  @Selector()
  static date(state: AddMeal.IAddMealState): DateTime {
    return state.date;
  }

  constructor(api: ApiService) {
    AddMealState.api = api;
  }

  @Receiver({action: RouterNavigated})
  static onNavigate(ctx: StateContext<AddMeal.IAddMealState>, action: RouterNavigated) {
    if (!action.routerState.url.match(`/${fromRoutes.addMeal}.*`)) {
      return EMPTY;
    }

    const dateStr = action.routerState.root.queryParams?.['date'];
    const date = dateStr ? DateTime.fromISO(dateStr) : DateTime.now();
    ctx.patchState({
      filter: null,
      date: date,
    });


    return loadAllPages((page, pageSize) => this.api.loadMeals(page, pageSize, date.startOf('day'), date.endOf('day')), 10)
      .pipe(
        map(meals => sumPfccs(emptyPfcc, ...meals.map(m => m.pfcc))),
        tap(nutrients => ctx.patchState({nutrients})),
      );
  }

  @Receiver({type: AddMeal.LOAD_MEAL_OPTIONS, cancelUncompleted: true})
  static loadMealOptions(ctx: StateContext<AddMeal.IAddMealState>, {payload}: EmitterAction<AddMeal.LoadMealOptionsPayload>) {
    const filter = payload.filter;
    const page = payload.page;
    const pageSize = payload.pageSize;

    return AddMealState.api.getMealOptions(filter, page, pageSize)
      .pipe(
        tap((res) => {
          ctx.patchState({
            options: res.data,
            optionsPage: res.page,
            optionsPageSize: res.pageSize,
            optionsTotalPages: res.totalPages,
          });
        }),
        catchError(err => {
          console.warn('Error while loading meal options: ', err);

          //TODO: show error message

          return EMPTY;
        }),
      );
  }

  @Receiver({type: AddMeal.LOAD_MORE_MEAL_OPTIONS})
  static loadMoreMealOptions(ctx: StateContext<AddMeal.IAddMealState>, _: EmitterAction) {
    const state = ctx.getState();

    let page = state.optionsPage + 1;
    let pageSize = state.optionsPageSize;

    if (page >= state.optionsTotalPages) {
      console.error('Can\'t load more meal options: all data is loaded');
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
          });
        }),
        catchError(err => {
          console.warn('Error while loading meal options: ', err);
          //TODO: show error message
          return EMPTY;
        }),
      );
  }

  @Receiver({type: AddMeal.DELETE_DISH})
  static deleteDish(ctx: StateContext<AddMeal.IAddMealState>, {payload}: EmitterAction<AddMeal.DeleteDishPayload>) {
    return this.api.deleteDish(payload)
      .pipe(
        switchMap(_ => {
          let loaders: Observable<IPage<IMealOption>>[] = [];

          const state = ctx.getState();
          for (let i = 0; i <= state.optionsPage; i++) {
            loaders.push(this.api.getMealOptions(state.filter, i, state.optionsPageSize));
          }

          return combineLatest(loaders);
        }),
        tap(pages => {
          ctx.patchState({
            options: pages.map(p => p.data).reduce((data1, data2) => [...data1, ...data2], []),
            optionsTotalPages: pages[pages.length - 1].totalPages,
          });
        }),
        catchError(err => {
          console.warn('Error while deleting dish: ', err);
          //TODO: show error message
          return EMPTY;
        }),
      );
  }

  @Receiver({type: AddMeal.SAVE_MEAL})
  static saveMeal(ctx: StateContext<AddMeal.IAddMealState>, {payload}: EmitterAction<AddMeal.SaveMealPayload>) {
    return this.api.addMeal(payload)
      .pipe(
        map(meal => {
          return {
            type: Navigation.NAVIGATE_BACK,
            payload: {
              additionalQueryParams: {
                savedMealId: meal.id,
              },
            } as Navigation.NavigateBackPayload,
          };
        }),
        catchError(err => {
          console.warn('Error while saving dish: ', err);
          //TODO: show error message
          return EMPTY;
        }),
        switchMap(ctx.dispatch)
      )
  }
}
