import {Selector, State, StateContext} from '@ngxs/store';
import {Injectable} from '@angular/core';
import {ApiService} from '../../service/api.service';
import {EmitterAction, Receiver} from '@ngxs-labs/emitter';
import {Reports} from './reports.state-models';
import {catchError, EMPTY, interval, map, Observable, of, startWith, Subscription, switchMap, tap} from 'rxjs';
import {AlertService} from '../../service/alert.service';
import {IReport} from '../../commons/models/domain.models';
import {RouterNavigated} from '@ngxs/router-plugin';
import * as fromRoutes from '../../commons/routes';

@State<Reports.IReportsState>({
  name: 'reports',
  defaults: {
    reports: [],
  },
})
@Injectable()
export class ReportsState {
  private static api: ApiService;
  private static alert: AlertService;

  private static loadReportsSubscription: Subscription;

  constructor(api: ApiService, alert: AlertService) {
    ReportsState.api = api;
    ReportsState.alert = alert;
  }

  @Selector()
  static reports(state: Reports.IReportsState): IReport[] {
    return state.reports;
  }

  @Receiver({type: Reports.REQUEST_PERIOD_REPORT})
  static requestPeriodReport(ctx: StateContext<Reports.IReportsState>,
                             {payload}: EmitterAction<Reports.RequestPeriodReportPayload>): Observable<void> {
    return this.api.requestPeriodReport(payload.from, payload.to).pipe(
      tap(_ => this.alert.success("alert.reports.period.requested-successfully")),
      catchError(_ => {
        this.alert.warn("alert.reports.period.request-failed");
        return EMPTY;
      }),
    );
  }

  @Receiver({action: RouterNavigated})
  static onNavigate(ctx: StateContext<Reports.IReportsState>, action: RouterNavigated): void {
    if (action.routerState.url.match(`/${fromRoutes.reports}.*`)) {
      if (this.loadReportsSubscription == null || this.loadReportsSubscription.closed) {
        this.loadReportsSubscription = interval(1000).pipe(
          startWith(1),
          switchMap(_ => this.api.loadReports()),
          map(reports => {
            ctx.patchState({
              reports,
            });
            return null;
          }),
          catchError(_ => {
            console.error("Unable to load reports");
            return of(null);
          }),
        ).subscribe(_ => {
        });
      }
    } else {
      this.loadReportsSubscription?.unsubscribe();
    }
  }

  @Receiver({type: Reports.DELETE_REPORT})
  static deleteReport(ctx: StateContext<Reports.IReportsState>, {payload}: EmitterAction<Reports.DeleteReportPayload>): Observable<void> {
    return this.api.deleteReport(payload).pipe(
      tap(_ => {
        ctx.patchState({
          reports: ctx.getState().reports.filter(r => r.id !== payload),
        });
        this.alert.success("alert.reports.delete.success");
      }),
      catchError(_ => {
        this.alert.warn("alert.reports.delete.failed");
        return EMPTY;
      }),
    );

  }
}
