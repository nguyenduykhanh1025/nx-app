import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ButtonComponent,
  CheckboxComponent,
  TextFieldComponent,
} from '@nx-app/web/libs';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PushPipe } from '@ngrx/component';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { AuthActions, selectLoadingStatus } from '../../data-access/store';
import { Auth } from '@quiz-app/data-access/models';
import { RouterLink } from '@angular/router';
import { AuthFormFieldComponent } from '../../ui/auth-form-field/auth-form-field.component';

@Component({
  selector: 'quiz-login',
  standalone: true,
  imports: [
    CommonModule,
    TextFieldComponent,
    ReactiveFormsModule,
    CheckboxComponent,
    ButtonComponent,
    PushPipe,
    RouterLink,
    AuthFormFieldComponent,
  ],
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  readonly #store = inject(Store);

  readonly isLoadingSignInButton$ = this.#store
    .select(selectLoadingStatus)
    .pipe(map((loadingStatus) => loadingStatus === 'RUNNING'));
  readonly loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    hasRememberMe: new FormControl(false),
  });

  handleSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }
    this.#store.dispatch(
      AuthActions.login({ auth: this.loginForm.value as Auth })
    );
  }
}
