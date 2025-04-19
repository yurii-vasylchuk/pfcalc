import {Injectable} from '@angular/core'
import {NgxsOnInit, Selector, State, StateContext, Store} from '@ngxs/store'
import {Dashboard} from './dashboard.state-models'
import {ApiService} from '../../service/api.service'
import {DateTime} from 'luxon'
import {ProfileState} from '../../state/profile.state'
import {catchError, combineLatest, EMPTY, map, Observable, of, switchMap, tap} from 'rxjs'
import {emptyPfcc, IPage, IPfcc} from '../../commons/models/common.models'
import {defaultWeeklyNutrientsType, IMeal, IMeasurement} from '../../commons/models/domain.models'
import {EmitterAction, Receiver} from '@ngxs-labs/emitter'
import {ceilPfcc, multiplyPfcc, sumPfccs} from '../../commons/functions'
import {ProfileLoadedEvent} from '../../commons/models/state.models'
import {RouterNavigated} from '@ngxs/router-plugin'
import * as fromRoutes from '../../commons/routes'
import {AlertService} from '../../service/alert.service'
import {Auth} from '../auth/auth.state-models'
import {LocalStoreService} from '../../service/local-store.service'

@State<Dashboard.IDashboardState>({
  name: 'dashboard',
  defaults: {
    aims: null,
    weekMeals: null,
    currentDate: null,
    weeklyNutrientsType: defaultWeeklyNutrientsType,
    measurements: new Map<number, IMeasurement[]>(),
  },
})
@Injectable({providedIn: 'root'})
export class DashboardState implements NgxsOnInit {
  private static api: ApiService
  private static alert: AlertService
  private static localStore: LocalStoreService

  constructor(api: ApiService, private store: Store, alertService: AlertService, localStore: LocalStoreService) {
    DashboardState.api = api
    DashboardState.alert = alertService
    DashboardState.localStore = localStore
  }

  @Selector()
  static currentDate(state: Dashboard.IDashboardState): DateTime {
    return DateTime.fromISO(state.currentDate)
  }

  @Selector()
  static dailyAims({aims}: Dashboard.IDashboardState): IPfcc {
    return aims
  }

  @Selector([DashboardState, DashboardState.weeklyCountingDays])
  static weeklyAims({aims, weeklyNutrientsType}: Dashboard.IDashboardState, countingDays: number): IPfcc {
    switch (weeklyNutrientsType) {
      case 'TOTAL':
        return {
          protein: (aims.protein || 0) * countingDays,
          fat: (aims.fat || 0) * countingDays,
          carbohydrates: (aims.carbohydrates || 0) * countingDays,
          calories: (aims.calories || 0) * countingDays,
        }
      case 'AVERAGE':
        return {
          protein: (aims.protein || 0),
          fat: (aims.fat || 0),
          carbohydrates: (aims.carbohydrates || 0),
          calories: (aims.calories || 0),
        }
    }
  }

  @Selector()
  static weeklyCountingDays({weekMeals}: Dashboard.IDashboardState): number {
    if (weekMeals == null) {
      return 0
    }

    return weekMeals.map(m => m.eatenOn.toISODate())
      .filter((value, index, array) => array.indexOf(value) === index)
      .length
  }

  @Selector([DashboardState.todayMeals])
  static todayNutrients(todayMeals: IMeal[]): IPfcc {
    return sumPfccs(...todayMeals.map(m => m.pfcc))
  }

  @Selector([DashboardState, DashboardState.weeklyCountingDays])
  static weeklyNutrients(state: Dashboard.IDashboardState, countingDays: number): IPfcc {
    if (state.weekMeals == null) {
      return emptyPfcc
    }

    switch (state.weeklyNutrientsType) {
      case 'TOTAL':
        return sumPfccs(
          ...state.weekMeals.map(m => m.pfcc),
        )
      case 'AVERAGE':
        return ceilPfcc(
          multiplyPfcc(
            sumPfccs(...state.weekMeals.map(m => m.pfcc)),
            (1 / countingDays),
          ),
        )
    }
  }

  @Selector()
  static todayMeals(state: Dashboard.IDashboardState): IMeal[] {
    if (state.weekMeals == null) {
      return []
    }
    return state.weekMeals
      .filter(m => m.eatenOn.hasSame(this.currentDate(state), 'day'))
  }

  @Selector()
  static measurements(state: Dashboard.IDashboardState): Map<number, IMeasurement[]> {
    return state.measurements
  }

  @Receiver({action: RouterNavigated})
  static onNavigate(ctx: StateContext<Dashboard.IDashboardState>, action: RouterNavigated): Observable<void> {
    if (!action.routerState.url.match(`/${fromRoutes.dashboard}.*`)) {
      return EMPTY
    }

    return this.loadWeekMeals(this.currentDate(ctx.getState()), ctx)
  }

  @Receiver({type: Dashboard.REMOVE_MEAL})
  static removeMeal(ctx: StateContext<Dashboard.IDashboardState>, {payload}: EmitterAction<Dashboard.RemoveMealPayload>): Observable<void> {
    return this.api.removeMeal(payload.id)
      .pipe(
        tap(_ => ctx.patchState({weekMeals: ctx.getState().weekMeals.filter(m => m.id !== payload.id)})),
        catchError(err => {
          console.error(err)
          this.alert.warn('alert.default-error')

          return EMPTY
        }),
      )
  }

  @Receiver({type: Dashboard.EDIT_MEAL})
  public static editMeal(ctx: StateContext<Dashboard.IDashboardState>, {payload}: EmitterAction<Dashboard.EditMealPayload>): Observable<void> {
    return this.api.saveMeal(payload)
      .pipe(
        tap(meal => {
          ctx.patchState({
            weekMeals: [
              ...ctx.getState().weekMeals.map(m => {
                if (m.id === meal.id) {
                  return meal
                }
                return m
              }),
            ],
          })
        }),
        map(_ => null),
        catchError(err => {
          console.error(err)
          this.alert.warn('alert.default-error')

          return EMPTY
        }),
      )

  }

  @Receiver({type: Dashboard.SWITCH_DATE})
  static switchDate(ctx: StateContext<Dashboard.IDashboardState>, {payload}: EmitterAction<Dashboard.SwitchDatePayload>): Observable<void> {
    const newDate = payload.date.startOf('day')
    const oldDate = this.currentDate(ctx.getState())
    console.log(`OldDate: ${oldDate.toISODate()}; NewDate: ${newDate.toISODate()}`)

    ctx.patchState({
      currentDate: newDate.toISODate(),
    })

    if (oldDate.weekNumber === newDate.weekNumber) {
      console.log(`Week number is same old[${oldDate.weekNumber}] === new[${newDate.weekNumber}]`)
      return EMPTY
    }
    console.log(`Week number is distinct old[${oldDate.weekNumber}] === new[${newDate.weekNumber}]`)

    return this.loadWeekMeals(newDate, ctx)
  }

  @Receiver({action: ProfileLoadedEvent})
  public static profileLoaded(ctx: StateContext<Dashboard.IDashboardState>, {profile}: ProfileLoadedEvent): void {
    ctx.patchState({
      aims: profile.aims,
    })
  }

  @Receiver({action: Auth.ProfileConfiguredSuccessfullyEvent})
  public static profileConfigured(ctx: StateContext<Dashboard.IDashboardState>, {aims}: Auth.ProfileConfiguredSuccessfullyEvent): void {
    ctx.patchState({
      aims,
    })
  }

  @Receiver({type: Dashboard.SWITCH_WEEKLY_NUTRIENTS_TYPE})
  public static switchWeeklyNutrientsType(ctx: StateContext<Dashboard.IDashboardState>, {payload}: EmitterAction<Dashboard.SwitchWeeklyNutrientsTypePayload>): void {
    ctx.patchState({
      weeklyNutrientsType: payload,
    })
    this.localStore.saveWeeklyNutrientsType(payload)
  }

  @Receiver({type: Dashboard.PREPARE_MEAL_EDIT})
  public static prepareMealEdit(ctx: StateContext<Dashboard.IDashboardState>, {payload}: EmitterAction<Dashboard.PrepareMealEditPayload>): Observable<void> {
    if (payload.dishId != null) {
      return EMPTY
    }
    return this.api.loadMeasurements(payload.foodId)
      .pipe(
        tap(measurements => {
          const measurementsMap = new Map<number, IMeasurement[]>(ctx.getState().measurements)
          measurementsMap.set(payload.foodId, measurements)
          ctx.patchState({
            measurements: measurementsMap,
          })
        }),
        map(_ => null),
        catchError(err => {
          console.error(err)
          this.alert.warn('alert.default-error')

          return EMPTY
        }),
      )
  }

  private static loadWeekMeals(date: DateTime, ctx: StateContext<Dashboard.IDashboardState>): Observable<void> {
    const pageSize = 50
    const from = date.startOf('week')
    const to = date.endOf('week')

    return this.api.loadMeals(0, pageSize, from, to)
      .pipe(
        switchMap(mealsPage => {
          let loaders: Observable<IPage<IMeal>>[] = []
          loaders.push(of(mealsPage))

          for (let i = 1; i < mealsPage.totalPages; i++) {
            loaders.push(this.api.loadMeals(i, pageSize, from, to))
          }

          return combineLatest(loaders)
        }),
        map(pages => {
          return pages.map(p => p.data).reduce((m1, m2) => ([...m1, ...m2]), [])
        }),
        tap(meals => {
          ctx.patchState({weekMeals: meals})
        }),
        map(_ => null),
        catchError(err => {
          console.error(err)
          this.alert.warn('alert.default-error')

          return EMPTY
        }),
      )
  }

  ngxsOnInit(ctx: StateContext<Dashboard.IDashboardState>): void {
    const now = DateTime.now()
    ctx.patchState({
      currentDate: now.toISODate(),
      aims: this.store.selectSnapshot(ProfileState.aims),
      weeklyNutrientsType: DashboardState.localStore.loadWeeklyNutrientsType(),
    })
  }
}
