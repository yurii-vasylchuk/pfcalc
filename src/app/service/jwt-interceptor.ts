import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import {Injectable} from '@angular/core';
import {Store} from '@ngxs/store';
import {AuthState} from '../state/auth/auth.state';
import {AuthLogOutAction} from '../state/auth/auth.state-models';

@Injectable({
  providedIn: 'root',
})
class JwtInterceptor implements HttpInterceptor {
  private token: string | null | undefined;

  constructor(private store: Store) {
    store.select(AuthState.token)
      .subscribe(token => this.token = token);
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.token !== null) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${this.token}`,
        },
      });
    }

    return next.handle(req)
      .pipe(
        catchError(err => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 403) {
              this.store.dispatch(new AuthLogOutAction());
            }
          } else {
            console.warn(`Unexpected http error: ${err}`);
          }

          return throwError(() => err);
        }),
      );
  }

}
