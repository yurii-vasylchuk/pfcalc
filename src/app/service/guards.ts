import {inject} from '@angular/core';
import {CanActivateFn} from '@angular/router';
import {filter, map, Observable, tap} from 'rxjs';
import {Store} from '@ngxs/store';
import {AuthState} from '../state/auth/auth.state';
import {Navigate} from '@ngxs/router-plugin';
import * as fromRoutes from '../commons/routes';
import {UnknownBoolean} from '../commons/models/common.models';

export const isAuthenticatedGuardFn: CanActivateFn = (): Observable<boolean> => {
  const store = inject(Store);
  return store.select(AuthState.isAuthenticated)
    .pipe(
      filter(isAuthenticated => isAuthenticated !== UnknownBoolean.UNKNOWN),
      map(value => value === UnknownBoolean.TRUE),
      tap(isAuthenticated => {
        if (!isAuthenticated) {
          store.dispatch(new Navigate([`/${fromRoutes.signIn}`]));
        }
      }),
    );
}
export const isNotAuthenticatedGuardFn: CanActivateFn = (): Observable<boolean> => {
  const store = inject(Store);
  return store.select(AuthState.isAuthenticated)
    .pipe(
      filter(isAuthenticated => isAuthenticated !== UnknownBoolean.UNKNOWN),
      map(value => value === UnknownBoolean.FALSE),
      tap(isNotAuthenticated => {
        if (!isNotAuthenticated) {
          store.dispatch(new Navigate([`/${fromRoutes.dashboard}`]));
        }
      }),
    );
}
export const profileConfiguredGuardFn: CanActivateFn = (): Observable<boolean> => {
  const store = inject(Store);
  return store.select(AuthState.profileConfigured)
    .pipe(
      filter(value => value !== UnknownBoolean.UNKNOWN),
      map(value => value === UnknownBoolean.TRUE),
      tap(isProfileConfigured => {
        if (!isProfileConfigured) {
          store.dispatch(new Navigate([`/${fromRoutes.completeProfile}`]));
        }
      }),
    );

}
