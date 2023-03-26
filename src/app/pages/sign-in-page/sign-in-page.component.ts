import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {Store} from '@ngxs/store';
import {AuthSignInAction} from '../../state/auth/auth.state-models';
import {TranslateModule} from '@ngx-translate/core';

@Component({
  selector: 'pfc-sign-in-page',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    TranslateModule,
  ],
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInPageComponent implements OnInit {

  form = this.fb.group({
    email: ['', Validators.compose([Validators.required, Validators.email])],
    password: ['', Validators.compose([Validators.required])],
  });

  constructor(private fb: FormBuilder,
              private store: Store) {
  }


  ngOnInit(): void {
  }

  onSubmit() {
    const email = this.form.value.email as string;
    const password = this.form.value.password as string;
    this.store.dispatch(new AuthSignInAction(email, password));
  }
}
