import {DateTime} from 'luxon';
import {IReport} from '../../commons/models/domain.models';

export namespace Reports {
  export type IReportsState = {
    reports: IReport[];
  };


  export type RequestPeriodReportPayload = {
    from: DateTime;
    to: DateTime;
  };

  export const REQUEST_PERIOD_REPORT = "[Reports] Request period report";
}
