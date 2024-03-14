import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {SettingsState} from './settings.state';
import {MatFormField, MatLabel, MatSuffix} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Store} from '@ngxs/store';
import {filter, take} from 'rxjs';
import {TranslateModule} from '@ngx-translate/core';
import {MatButton} from '@angular/material/button';
import {Emittable, Emitter} from '@ngxs-labs/emitter';
import {Settings} from './settings.state-models';

type NameForm = FormGroup<{
  username: FormControl<string>
}>;

type AimsForm = FormGroup<{
  protein: FormControl<number | null>,
  fat: FormControl<number | null>,
  carbohydrates: FormControl<number | null>,
  calories: FormControl<number | null>,
}>;

@Component({
  selector: 'pfc-settings',
  standalone: true,
  imports: [
    MatFormField,
    MatInput,
    ReactiveFormsModule,
    TranslateModule,
    MatButton,
    MatLabel,
    MatSuffix,
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsComponent implements OnInit {
  @Emitter(SettingsState.updateAims)
  private updateAimsEmt: Emittable<Settings.UpdateAimsPayload>;

  protected aimsForm: AimsForm;
  protected nameForm: NameForm;

  constructor(private fb: FormBuilder, private store: Store) {
    this.aimsForm = fb.group({
      protein: [0],
      fat: [0],
      carbohydrates: [0],
      calories: [0],
    });
    this.nameForm = fb.group({
      username: ['', Validators.compose([Validators.required])],
    });
  }

  ngOnInit(): void {
    this.store.select(SettingsState.aims)
      .pipe(
        filter(aims => aims != null),
        take(1),
      ).subscribe(aims => this.aimsForm.patchValue({...aims}));

    this.store.select(SettingsState.username)
      .pipe(
        filter(aims => aims != null),
        take(1),
      ).subscribe(username => this.nameForm.patchValue({username: username}));
  }

  handleAimsFormSubmit() {
    const aims = this.aimsForm.value;
    this.updateAimsEmt.emit({
      protein: aims.protein ?? null,
      fat: aims.fat ?? null,
      carbohydrates: aims.carbohydrates ?? null,
      calories: aims.calories ?? null
    })
  }
}
