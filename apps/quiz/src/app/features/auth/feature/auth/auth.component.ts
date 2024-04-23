import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import {
  ButtonComponent,
  CheckboxComponent,
  TextFieldComponent,
} from '@nx-app/web/libs';
import { Auth } from '@quiz-app/data-access/models';
import { AuthActions } from '../../data-access/store/auth.actions';
import { selectLoadingStatus } from '../../data-access/store/auth.selectors';
import { map } from 'rxjs';
import { PushPipe } from '@ngrx/component';

@Component({
  selector: 'quiz-auth',
  standalone: true,
  imports: [
    CommonModule,
    TextFieldComponent,
    ReactiveFormsModule,
    CheckboxComponent,
    ButtonComponent,
    PushPipe,
  ],
  templateUrl: './auth.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent {
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
