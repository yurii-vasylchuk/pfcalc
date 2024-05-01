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
  export type DeleteReportPayload = number;

  export const REQUEST_PERIOD_REPORT = "[Reports] Request period report";
  export const DELETE_REPORT = "[Reports] delete report";
}
