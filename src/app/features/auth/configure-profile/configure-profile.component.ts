import {ChangeDetectionStrategy, Component} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms'
import {TranslateModule} from '@ngx-translate/core'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatButtonModule} from '@angular/material/button'
import {MatInputModule} from '@angular/material/input'
import {MatSlideToggleModule} from '@angular/material/slide-toggle'
import {Emittable, Emitter} from '@ngxs-labs/emitter'
import {AuthState} from '../auth.state'
import {Auth} from '../auth.state-models'

@Component({
  selector: 'pfc-configure-profile',
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatButtonModule, MatInputModule, MatSlideToggleModule, TranslateModule],
  templateUrl: './configure-profile.component.html',
  styleUrls: ['./configure-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfigureProfileComponent {
  protected form = this.fb.group({
    protein: [130, Validators.min(0)],
    fat: [50, Validators.min(0)],
    carbohydrates: [160, Validators.min(0)],
    calories: [2000, Validators.min(0)],
  })
  @Emitter(AuthState.configureProfile)
  private configureProfileEmt: Emittable<Auth.ConfigureProfilePayload>

  constructor(private fb: FormBuilder) {
  }

  protected submit() {
    this.configureProfileEmt.emit({
      aims: {
        protein: this.form.value.protein ?? null,
        fat: this.form.value.fat ?? null,
        carbohydrates: this.form.value.carbohydrates ?? null,
        calories: this.form.value.calories ?? null,
      },
    })
  }
}
