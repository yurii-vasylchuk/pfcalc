import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {filter, map, Observable, tap} from 'rxjs';
import {Store} from '@ngxs/store';
import {AuthState} from '../state/auth/auth.state';
import {UnknownBoolean} from '../commons/models/common.models';
import {Navigate} from '@ngxs/router-plugin';
import * as fromRoutes from '../commons/routes';

@Injectable({
  providedIn: 'root',
})
export class IsNotAuthenticatedGuard implements CanActivate {
  constructor(private store: Store) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.store.select(AuthState.isAuthenticated)
      .pipe(
        filter(isAuthenticated => isAuthenticated !== UnknownBoolean.UNKNOWN),
        map(value => value === UnknownBoolean.FALSE),
        tap(isNotAuthenticated => {
          if (!isNotAuthenticated) {
            this.store.dispatch(new Navigate([`/${fromRoutes.dashboard}`]));
          }
        }),
      );
  }

}
