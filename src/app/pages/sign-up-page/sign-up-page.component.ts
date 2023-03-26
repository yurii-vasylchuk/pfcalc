import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {CommonModule} from '@angular/common';
import * as fromPfccValidators from '../../commons/pfcc-validators';
import {Store} from '@ngxs/store';
import {AuthSignUpAction} from '../../state/auth/auth.state-models';
import {MatInputModule} from '@angular/material/input';
import {map} from 'rxjs';
import {TranslateModule} from '@ngx-translate/core';

@Component({
  selector: 'pfc-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    TranslateModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpPageComponent implements OnInit {


  readonly minPasswordLength = 6;
  form = this.fb.group({
    email: ['', Validators.compose([Validators.email, Validators.required])],
    password: ['', Validators.compose([Validators.required, Validators.minLength(this.minPasswordLength)])],
    confirmPassword: ['', Validators.compose([Validators.required, Validators.minLength(this.minPasswordLength)])],
  }, {
    validators: fromPfccValidators.fieldsMatches('password', 'confirmPassword'),
  });

  constructor(private fb: FormBuilder, private store: Store) {
  }

  ngOnInit(): void {
    this.form.statusChanges
      .pipe(
        map(formStatus => {
          return [
            formStatus,
            this.form.errors,
            this.form.controls.email.errors,
            this.form.controls.password.errors,
            this.form.controls.confirmPassword.errors,
          ];
        }),
      )
      .subscribe(console.log);
  }

  signUp() {
    const password = this.form.value.password as string;
    const email = this.form.value.email as string;
    this.store.dispatch(new AuthSignUpAction(email, password));
  }
}
