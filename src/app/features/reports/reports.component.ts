import {ChangeDetectionStrategy, Component, EventEmitter, TrackByFunction} from '@angular/core'
import {TranslateModule} from '@ngx-translate/core'
import {MatError, MatFormField, MatLabel, MatSuffix} from '@angular/material/form-field'
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms'
import {MatInput} from '@angular/material/input'
import {
  MatDatepickerToggle,
  MatDateRangeInput,
  MatDateRangePicker,
  MatEndDate,
  MatStartDate,
} from '@angular/material/datepicker'
import {DateTime} from 'luxon'
import {MatButton, MatIconButton} from '@angular/material/button'
import {CommonModule} from '@angular/common'
import {ViewSelectSnapshot} from '@ngxs-labs/select-snapshot'
import {ReportsState} from './reports.state'
import {IReport} from '../../commons/models/domain.models'
import {Emitter} from '@ngxs-labs/emitter'
import {Reports} from './reports.state-models'
import {MatProgressSpinner} from '@angular/material/progress-spinner'
import {MatIcon} from '@angular/material/icon'

type PeriodReportFormGroup = FormGroup<{
  from: FormControl<DateTime>;
  to: FormControl<DateTime>;
}>;

type PeriodPreset = 'previous-week' | 'current-week' | 'current-month';

@Component({
  selector: 'pfc-reports',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    MatFormField,
    FormsModule,
    ReactiveFormsModule,
    MatInput,
    MatDatepickerToggle,
    MatSuffix,
    MatError,
    MatLabel,
    MatButton,
    MatDateRangeInput,
    MatDateRangePicker,
    MatStartDate,
    MatEndDate,
    MatProgressSpinner,
    MatIcon,
    MatIconButton,
  ],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReportsComponent {
  protected periodReportForm: PeriodReportFormGroup
  @ViewSelectSnapshot(ReportsState.reports)
  protected reports: IReport[]
  @Emitter(ReportsState.requestPeriodReport)
  private requestPeriodReportEmt: EventEmitter<Reports.RequestPeriodReportPayload>
  @Emitter(ReportsState.deleteReport)
  private deleteReportEmt: EventEmitter<Reports.DeleteReportPayload>

  constructor() {
    const now = DateTime.now()
    const fromDefault = now.startOf('week').minus({weeks: 1})
    const toDefault = now.startOf('week').minus({days: 1})
    this.periodReportForm = new FormGroup<{ from: FormControl<DateTime>; to: FormControl<DateTime> }>({
      from: new FormControl<DateTime>(fromDefault, Validators.required),
      to: new FormControl<DateTime>(toDefault, Validators.required),
    }, {
      validators: this.validatePeriod,
    })
  }

  handleDeleteReport(id: number) {
    this.deleteReportEmt.emit(id)
  }

  handlePresetClick(preset: PeriodPreset) {
    const now = DateTime.now()

    switch (preset) {
      case 'previous-week': {
        const from = now.startOf('week').minus({weeks: 1})
        const to = now.startOf('week').minus({days: 1})
        this.periodReportForm.setValue({from, to})
        break
      }
      case 'current-week': {
        const from = now.startOf('week')
        const to = now.endOf('week')
        this.periodReportForm.setValue({from, to})
        break
      }
      case 'current-month': {
        const from = now.startOf('month')
        const to = now.endOf('month')
        this.periodReportForm.setValue({from, to})
        break
      }
    }
  }

  protected trackReportById: TrackByFunction<IReport> = (_, report) => report.id

  protected generatePeriodReport() {
    const form = this.periodReportForm
    if (form.invalid) {
      return
    }
    this.requestPeriodReportEmt.emit({
      from: form.value.from,
      to: form.value.to,
    })
  }

  protected reportHref(report: IReport): string {
    return report.status === 'INITIALIZED' ?
      'javascript:void(0)' :
      `/api/report/${report.id}/file`
  }

  private validatePeriod: ValidatorFn = (form: AbstractControl): ValidationErrors => {
    if (form.value.from > form.value.to) {
      return {
        periodInvalid: true,
      }
    }

    return null
  }
}
