import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {Store} from '@ngxs/store';
import {ConfigureProfileAction} from '../../state/domain/domain.state-models';
import {TranslateModule} from '@ngx-translate/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@Component({
  selector: 'pfc-configure-profile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatButtonModule, MatInputModule, MatSlideToggleModule, TranslateModule],
  templateUrl: './configure-profile.component.html',
  styleUrls: ['./configure-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfigureProfileComponent {
  form = this.fb.group({
    protein: [100, Validators.min(0)],
    fat: [40, Validators.min(0)],
    carbohydrates: [150, Validators.min(0)],
    calories: [2000, Validators.min(0)]
  });

  constructor(private store: Store, private fb: FormBuilder) {
  }

  submit() {
    this.store.dispatch(new ConfigureProfileAction({
      protein: this.form.value.protein || null,
      fat: this.form.value.fat || null,
      carbohydrates: this.form.value.carbohydrates || null,
      calories: this.form.value.calories || null,
    }));
  }
}
