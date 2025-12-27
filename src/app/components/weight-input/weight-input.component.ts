import {ChangeDetectionStrategy, Component, effect, inject, input, output, untracked} from '@angular/core'
import {defaultMeasurement, IMeasurement, IWeight} from '../../commons/models/domain.models'
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'
import {MatInput} from '@angular/material/input'
import {TranslatePipe} from '@ngx-translate/core'
import {MatOption, MatSelect} from '@angular/material/select'
import {takeUntilDestroyed} from '@angular/core/rxjs-interop'
import {MatFormField} from '@angular/material/form-field'
import {FormGroupValue} from '../../commons/models/common.models'
import {MatProgressBar} from '@angular/material/progress-bar'

export type IWeightForm = FormGroup<{
  measurement: FormControl<IMeasurement>,
  weight: FormControl<number>,
}>

@Component({
  selector: 'pfc-weight-input',
  imports: [
    MatFormField,
    MatInput,
    MatOption,
    MatSelect,
    ReactiveFormsModule,
    TranslatePipe,
    MatProgressBar,
  ],
  templateUrl: './weight-input.component.html',
  styleUrl: './weight-input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class WeightInputComponent {
  measurements = input.required<IMeasurement[]>()
  initial = input<IWeight>()

  weightChanges = output<IWeight>()

  protected form: IWeightForm

  private fb = inject(FormBuilder)

  constructor() {
    this.form = this.fb.group({
      measurement: this.fb.control(null, [Validators.required]),
      weight: this.fb.control(0, [Validators.required]),
    })

    this.form.valueChanges
      .pipe(
        takeUntilDestroyed(),
      )
      .subscribe(value => {
        if (value.measurement?.id === defaultMeasurement.id) {
          this.weightChanges.emit({
            measurementId: null,
            measurementCount: null,
            inGram: value.weight,
            measurementName: null,
          })
        } else {
          this.weightChanges.emit({
            measurementId: value.measurement.id,
            measurementCount: value.weight,
            inGram: value.weight * value.measurement.toGramMultiplier,
            measurementName: value.measurement.name,
          })
        }
      })

    effect(() => {
      const weight = this.initial()
      const measurements = untracked(this.measurements)

      if (weight == null || measurements == null || measurements.length == 0) {
        return
      }

      const measurement = measurements.find(m => m.id === weight.measurementId) ?? defaultMeasurement

      const patch: Partial<FormGroupValue<IWeightForm>> = {
        weight: weight.measurementId != null ? weight.measurementCount : weight.inGram,
        measurement: measurement,
      }

      this.form.patchValue(patch, {emitEvent: false})
    })
  }
}
