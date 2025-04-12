import {State, StateContext} from '@ngxs/store'
import {Navigation} from './navigation.state-model'
import {EmitterAction, Receiver} from '@ngxs-labs/emitter'
import {RouterNavigated} from '@ngxs/router-plugin'
import {Injectable} from '@angular/core'
import {environment} from '../../environments/environment'
import {ActivatedRoute, Router} from '@angular/router'
import * as fromRoutes from '../commons/routes'
import {Observable, of, switchMap, tap} from 'rxjs'
import INavigationEntry = Navigation.INavigationEntry

@State<Navigation.INavigationState>({
  name: 'navigation',
  defaults: {
    history: [],
  },
})
@Injectable()
export class NavigationState {
  private static readonly BACK_NAVIGATION_URL_PROP = 'defaultBackNavigationUrl'

  private static router: Router

  constructor(router: Router) {
    NavigationState.router = router
  }

  @Receiver({action: RouterNavigated})
  static handleNavigation(ctx: StateContext<Navigation.INavigationState>, action: RouterNavigated) {
    const entry = this.extractNavigationHistoryEntry(action)

    this.putNewEntryIntoHistory(entry, ctx)

    this.reduceHistorySize(ctx)
  }

  @Receiver({type: Navigation.NAVIGATE_BACK})
  static navigateBack(ctx: StateContext<Navigation.INavigationState>, {payload}: EmitterAction<Navigation.NavigateBackPayload>): Promise<unknown> | Observable<unknown> {
    if (ctx.getState().history.length <= 1) {
      console.warn('No history to go back, returning to defaultPage')

      return this.extractBackNavigationUrl(this.router.routerState.root).pipe(
        tap(_ => {
          if (ctx.getState().history.length > 0) {
            ctx.patchState({
              history: ctx.getState().history.slice(0, -1),
            })
          }
        }),
        switchMap(backUrl => this.router.navigate([backUrl])),
      )
    }

    ctx.patchState({
      history: ctx.getState().history.slice(0, -1),
    })
    const state = ctx.getState()
    let target = state.history[state.history.length - 1]

    if (target == null) {
      target = {
        url: [fromRoutes.dashboard],
        queryParams: {},
      }
    } else {
      // Make copy of original target as state freezes objects
      target = {...target}
    }

    if (payload.additionalQueryParams != null) {
      target.queryParams = {
        ...target.queryParams,
        ...payload.additionalQueryParams,
      }
    }

    return this.router.navigate(target.url, {queryParams: target.queryParams})
  }

  private static reduceHistorySize(ctx: StateContext<Navigation.INavigationState>) {
    if (ctx.getState().history.length > environment.navigation.maxHistorySize) {
      ctx.patchState({
        history: ctx.getState().history.slice(1),
      })
    }
  }

  private static putNewEntryIntoHistory(entry: INavigationEntry, ctx: StateContext<Navigation.INavigationState>) {
    if (ctx.getState().history.length == 0) {
      ctx.patchState({
        history: [entry],
      })
      return
    }

    const last = ctx.getState().history[ctx.getState().history.length - 1]

    if (last.url.length === entry.url.length &&
      last.url.every((value, index) => value === entry.url[index]) &&
      NavigationState.queryParamsEqual(last, entry)) {
      console.log('Navigation to top url detected')
      return
    }

    ctx.patchState({
      history: [...ctx.getState().history, entry],
    })
  }

  private static extractNavigationHistoryEntry(action: RouterNavigated) {
    const entry: Navigation.INavigationEntry = {
      url: action.routerState.root.firstChild.url.map(seg => seg.path),
      queryParams: action.routerState.root.queryParams,
    }
    return entry
  }

  private static queryParamsEqual(entry1: Navigation.INavigationEntry, entry2: Navigation.INavigationEntry): boolean {
    if (entry1.queryParams == null && entry2.queryParams == null) {
      return true
    }

    if ((entry1.queryParams == null) != (entry2.queryParams == null)) {
      return false
    }

    for (let key in entry1.queryParams) {
      if (entry1.queryParams[key] != entry2.queryParams[key]) {
        return false
      }
    }

    return true
  }

  private static extractBackNavigationUrl(route: ActivatedRoute): Observable<string> {
    return route.data.pipe(
      switchMap(data => {
        const url = data[this.BACK_NAVIGATION_URL_PROP]
        if (url != null && typeof url === 'string') {
          return of(url)
        }

        return route.firstChild != null ?
          this.extractBackNavigationUrl(route.firstChild) :
          of(environment.navigation.defaultPage)
      }),
    )
  }
}
