import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {filter, map, Observable, tap} from 'rxjs';
import {Store} from '@ngxs/store';
import {AuthState} from '../state/auth/auth.state';
import {Navigate} from '@ngxs/router-plugin';
import * as fromRoutes from '../commons/routes';
import {UnknownBoolean} from '../commons/models/common.models';

@Injectable({
  providedIn: 'root',
})
export class IsAuthenticatedGuard implements CanActivate {
  constructor(private store: Store) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.store.select(AuthState.isAuthenticated)
      .pipe(
        filter(isAuthenticated => isAuthenticated !== UnknownBoolean.UNKNOWN),
        map(value => value === UnknownBoolean.TRUE),
        tap(isAuthenticated => {
          if (!isAuthenticated) {
            this.store.dispatch(new Navigate([`/${fromRoutes.signIn}`]));
          }
        }),
      );
  }

}
