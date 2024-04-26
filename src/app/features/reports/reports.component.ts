import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';
import {MatError, MatFormField, MatLabel, MatSuffix} from '@angular/material/form-field';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import {MatInput} from '@angular/material/input';
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from '@angular/material/datepicker';
import {DateTime} from 'luxon';
import {MatAnchor} from '@angular/material/button';
import {CommonModule} from '@angular/common';

type PeriodReportFormGroup = FormGroup<{
  from: FormControl<DateTime>;
  to: FormControl<DateTime>;
}>;

@Component({
  selector: 'pfc-reports',
  standalone: true,
  providers: [
    // provideLuxonDateAdapter({
    //   parse: {
    //     dateInput: 'yyyy-MM-dd',
    //   },
    //   display: {
    //     dateInput: 'yyyy-MM-dd',
    //     monthYearLabel: 'MMM yyyy',
    //     dateA11yLabel: 'yyyy-MM-dd',
    //     monthYearA11yLabel: 'MMMM yyyy',
    //   },
    // })
  ],
  imports: [
    CommonModule,
    TranslateModule,
    MatFormField,
    FormsModule,
    ReactiveFormsModule,
    MatInput,
    MatDatepickerInput,
    MatDatepicker,
    MatDatepickerToggle,
    MatSuffix,
    MatError,
    MatAnchor,
    MatLabel,
  ],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReportsComponent {
  protected periodReportForm: PeriodReportFormGroup;

  constructor() {
    const now = DateTime.now();
    const fromDefault = now.startOf('week').minus({weeks: 1});
    const toDefault = now.startOf('week').minus({days: 1});
    this.periodReportForm = new FormGroup<{ from: FormControl<DateTime>; to: FormControl<DateTime> }>({
      from: new FormControl<DateTime>(fromDefault, Validators.required),
      to: new FormControl<DateTime>(toDefault, Validators.required),
    }, {
      validators: this.validatePeriod,
    });
  }

  get periodReportLink(): string {
    return `/api/report/period?from=${this.periodReportForm.value.from.toFormat("yyyy-MM-dd")}&to=${this.periodReportForm.value.to.toFormat("yyyy-MM-dd")}`;
  };

  private validatePeriod: ValidatorFn = (form: AbstractControl): ValidationErrors => {
    if (form.value.from > form.value.to) {
      return {
        periodInvalid: true,
      };
    }

    return null;
  };

}
