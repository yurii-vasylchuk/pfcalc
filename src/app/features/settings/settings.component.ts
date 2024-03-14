import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ViewSelectSnapshot} from '@ngxs-labs/select-snapshot';
import {SettingsState} from './settings.state';
import {IPfcc} from '../../commons/models/common.models';
import {MatFormField} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {Store} from '@ngxs/store';
import {filter, take} from 'rxjs';

@Component({
  selector: 'pfc-settings',
  standalone: true,
  imports: [
    MatFormField,
    MatInput,
    ReactiveFormsModule,
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsComponent implements OnInit {
  @ViewSelectSnapshot(SettingsState.aims)
  protected aims: IPfcc;
  @ViewSelectSnapshot(SettingsState.username)
  protected username: string;

  protected aimsForm: FormGroup<{
    protein: FormControl<number>,
    fat: FormControl<number>,
    carbohydrates: FormControl<number>,
    calories: FormControl<number>,
  }>;

  constructor(private fb: FormBuilder, private store: Store) {
    this.aimsForm = fb.group({
      protein: [0],
      fat: [0],
      carbohydrates: [0],
      calories: [0],
    });
  }

  ngOnInit(): void {
    this.store.select(SettingsState.aims)
      .pipe(
        filter(aims => aims != null),
        take(1),
      ).subscribe(aims => this.aimsForm.patchValue({...aims}));
  }
}
