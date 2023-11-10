import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {catchError, Observable, switchMap, throwError} from 'rxjs';
import {Injectable} from '@angular/core';
import {Store} from '@ngxs/store';
import {AuthState} from '../state/auth/auth.state';
import {RefreshAuthAction} from '../state/auth/auth.state-models';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptor implements HttpInterceptor {

  constructor(private store: Store) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.startsWith(`${environment.baseUrl}/api`)) {
      req = req.clone({withCredentials: true});
    }

    return next.handle(req)
      .pipe(
        catchError(err => {
          if (this.shouldRefreshAuth(err)) {
            return this.store.dispatch(new RefreshAuthAction())
              .pipe(switchMap(_ => next.handle(req)));
          }

          return throwError(() => err);
        }),
      );
  }

  private shouldRefreshAuth(err: Error): boolean {
    return err instanceof HttpErrorResponse &&
      err.status === 403 &&
      this.store.selectSnapshot(AuthState.refreshToken) != null;
  }
}
