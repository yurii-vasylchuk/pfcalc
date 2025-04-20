import {ChangeDetectionStrategy, Component} from '@angular/core'
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms'

import * as fromPfccValidators from '../../../commons/pfcc-validators'
import {Auth} from '../auth.state-models'
import {TranslateModule} from '@ngx-translate/core'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatButtonModule} from '@angular/material/button'
import {MatInputModule} from '@angular/material/input'
import {RouterLink} from '@angular/router'
import {Emittable, Emitter} from '@ngxs-labs/emitter'
import {AuthState} from '../auth.state'


@Component({
  selector: 'pfc-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss'],
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    TranslateModule,
    RouterLink,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpPageComponent {

  protected readonly minPasswordLength = 6
  protected form = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
    name: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(this.minPasswordLength)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(this.minPasswordLength)]],
  }, {
    validators: fromPfccValidators.fieldsMatches('password', 'confirmPassword'),
  })
  @Emitter(AuthState.signUp)
  private signUpEmt: Emittable<Auth.SignUpPayload>

  constructor(private fb: FormBuilder) {
  }

  signUp() {
    const password = this.form.value.password as string
    const email = this.form.value.email as string
    const name = this.form.value.name as string
    this.signUpEmt.emit({email, name, password})
  }
}
