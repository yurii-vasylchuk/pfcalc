import {inject} from '@angular/core'
import {CanActivateFn, CanMatchFn} from '@angular/router'
import {filter, map, Observable, tap} from 'rxjs'
import {Store} from '@ngxs/store'
import {AuthState} from '../features/auth/auth.state'
import {Navigate} from '@ngxs/router-plugin'
import * as fromRoutes from '../commons/routes'
import {UnknownBoolean} from '../commons/models/common.models'
import {environment} from '../../environments/environment'

export const isAuthenticatedGuardFn: CanActivateFn = (): Observable<boolean> => {
  const store = inject(Store)
  return store.select(AuthState.isAuthenticated)
    .pipe(
      filter(isAuthenticated => isAuthenticated !== UnknownBoolean.UNKNOWN),
      map(value => value === UnknownBoolean.TRUE),
      tap(isAuthenticated => {
        if (!isAuthenticated) {
          store.dispatch(new Navigate([`/${fromRoutes.signIn}`]))
        }
      }),
    )
}

export const isTestEnvironment: CanMatchFn = (): boolean => {
  return !environment.production
}

export const isNotAuthenticatedGuardFn: CanActivateFn = (): Observable<boolean> => {
  const store = inject(Store)
  return store.select(AuthState.isAuthenticated)
    .pipe(
      filter(isAuthenticated => isAuthenticated !== UnknownBoolean.UNKNOWN),
      map(value => value === UnknownBoolean.FALSE),
      tap(isNotAuthenticated => {
        if (!isNotAuthenticated) {
          store.dispatch(new Navigate([`/${fromRoutes.dashboard}`]))
        }
      }),
    )
}
