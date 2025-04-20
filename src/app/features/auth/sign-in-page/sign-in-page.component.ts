import {ChangeDetectionStrategy, Component} from '@angular/core'

import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms'
import {Auth} from '../auth.state-models'
import {TranslateModule} from '@ngx-translate/core'
import {MatInputModule} from '@angular/material/input'
import {MatButtonModule} from '@angular/material/button'
import {RouterLink} from '@angular/router'
import {Emittable, Emitter} from '@ngxs-labs/emitter'
import {AuthState} from '../auth.state'

@Component({
  selector: 'pfc-sign-in-page',
  imports: [
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    TranslateModule,
    RouterLink,
  ],
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInPageComponent {
  protected form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  })
  @Emitter(AuthState.signIn)
  private signInEmt: Emittable<Auth.SignInPayload>

  constructor(private fb: FormBuilder) {
  }

  onSubmit() {
    const email = this.form.value.email as string
    const password = this.form.value.password as string
    this.signInEmt.emit({email, password})
  }
}
