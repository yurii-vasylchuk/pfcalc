import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core'
import {SettingsState} from './settings.state'
import {MatFormField, MatLabel, MatSuffix} from '@angular/material/form-field'
import {MatInput} from '@angular/material/input'
import {
  FormBuilder,
  FormControl,
  FormControlOptions,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms'
import {Store} from '@ngxs/store'
import {filter, take} from 'rxjs'
import {TranslateModule} from '@ngx-translate/core'
import {MatButton} from '@angular/material/button'
import {Emittable, Emitter} from '@ngxs-labs/emitter'
import {Settings} from './settings.state-models'

type NameForm = FormGroup<{
  username: FormControl<string>
}>;

type AimsForm = FormGroup<{
  protein: FormControl<number | null>,
  fat: FormControl<number | null>,
  carbohydrates: FormControl<number | null>,
  calories: FormControl<number | null>,
}>;

type PasswordForm = FormGroup<{
  currentPassword: FormControl<string>,
  newPassword: FormControl<string>,
  confirmNewPassword: FormControl<string>,
  username: FormControl<string>,
}>

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
  protected aimsForm: AimsForm
  protected nameForm: NameForm
  protected passwordForm: PasswordForm
  @Emitter(SettingsState.updateAims)
  private updateAimsEmt: Emittable<Settings.UpdateAimsPayload>
  @Emitter(SettingsState.updateUsername)
  private updateUsernameEmt: Emittable<Settings.UpdateUsernamePayload>
  @Emitter(SettingsState.updatePassword)
  private updatePasswordEmt: Emittable<Settings.UpdatePasswordPayload>

  constructor(fb: FormBuilder, private store: Store) {
    this.aimsForm = fb.group({
      protein: [0],
      fat: [0],
      carbohydrates: [0],
      calories: [0],
    })
    this.nameForm = fb.group({
      username: ['', Validators.compose([Validators.required])],
    })
    this.passwordForm = fb.group({
      currentPassword: ['', Validators.required],
      newPassword: ['', Validators.required],
      confirmNewPassword: ['', Validators.required],
      username: [''],
    }, {
      validators: (group: PasswordForm) => {
        if (group.controls.newPassword.value != group.controls.confirmNewPassword.value) {
          return {
            match: 'Passwords doesn\'t matches',
          } as ValidationErrors
        }
        return null
      },
    } as FormControlOptions)
  }

  ngOnInit(): void {
    this.store.select(SettingsState.aims)
      .pipe(
        filter(aims => aims != null),
        take(1),
      ).subscribe(aims => this.aimsForm.patchValue({...aims}))

    this.store.select(SettingsState.username)
      .pipe(
        filter(aims => aims != null),
        take(1),
      ).subscribe(username => this.nameForm.patchValue({username: username}))

    this.store.select(SettingsState.email)
      .pipe(
        filter(email => email != null),
        take(1),
      ).subscribe(email => this.passwordForm.patchValue({username: email}, {emitEvent: false}))
  }

  protected handleAimsFormSubmit(): void {
    const aims = this.aimsForm.value
    this.updateAimsEmt.emit({
      protein: aims.protein ?? null,
      fat: aims.fat ?? null,
      carbohydrates: aims.carbohydrates ?? null,
      calories: aims.calories ?? null,
    })
    this.aimsForm.markAsPristine()
  }

  protected handleNameFormSubmit(): void {
    if (this.nameForm.invalid) {
      console.error(`Username is invalid '${this.nameForm.value.username}'`)
      return
    }

    this.updateUsernameEmt.emit(this.nameForm.value.username.trim())
    this.nameForm.markAsPristine()
  }

  protected handlePasswordFormSubmit(): void {
    if (this.passwordForm.invalid) {
      const errors = this.passwordForm.errors
      for (let errorKey in errors) {
        console.error(errors[errorKey])
      }
      return
    }

    this.updatePasswordEmt.emit({
      currentPassword: this.passwordForm.controls.currentPassword.value,
      newPassword: this.passwordForm.controls.newPassword.value,
    })

    this.passwordForm.markAsPristine()
  }
}
