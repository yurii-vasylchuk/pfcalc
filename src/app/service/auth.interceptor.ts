import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {catchError, filter, Observable, Subject, switchMap, take, throwError} from 'rxjs';
import {Injectable, OnDestroy} from '@angular/core';
import {AuthState} from '../features/auth/auth.state';
import {environment} from '../../environments/environment';
import {Emittable, Emitter} from '@ngxs-labs/emitter';
import {SelectSnapshot} from '@ngxs-labs/select-snapshot';
import {Select} from '@ngxs/store';

@Injectable({providedIn: 'root'})
export class AuthInterceptor implements HttpInterceptor, OnDestroy {

  @Emitter(AuthState.refreshAuth)
  private refreshAuthEmitter: Emittable;
  @SelectSnapshot(AuthState.refreshToken)
  private refreshToken: Observable<string | null>;
  @Select(AuthState.refreshInProgress)
  private refreshInProgress$: Observable<boolean>;

  private destroy$ = new Subject<void>();

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.startsWith(`${environment.apiUrl}/api`)) {
      req = req.clone({withCredentials: true});
    }

    return next.handle(req)
      .pipe(
        catchError(err => {
          if (this.shouldRefreshAuth(err)) {
            return this.refreshInProgress$.pipe(
              take(1),
              switchMap(isRefreshing => {
                if (!isRefreshing) {
                  this.refreshAuthEmitter.emit();
                } else {
                }
                return this.refreshInProgress$.pipe(
                  filter(isRefreshing => !isRefreshing),
                  take(1),
                );
              }),
              switchMap(_ => {
                return next.handle(req);
              }),
            );
          }

          return throwError(() => err);
        }),
      );
  }

  private shouldRefreshAuth(err: Error): boolean {
    return err instanceof HttpErrorResponse &&
      err.status === 403 &&
      !err.url.startsWith(`${environment.apiUrl}/api/user/refresh-auth-token`) &&
      this.refreshToken != null;
  }
}
