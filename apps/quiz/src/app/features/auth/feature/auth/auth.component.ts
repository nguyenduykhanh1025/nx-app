import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
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
import { AuthService } from '@quiz-app/data-access/services/auth.service';
import { AuthActions } from '../../data-access/store/auth.actions';
import { selectToken } from '../../data-access/store/auth.selectors';

@Component({
  selector: 'quiz-auth',
  standalone: true,
  imports: [
    CommonModule,
    TextFieldComponent,
    ReactiveFormsModule,
    CheckboxComponent,
    ButtonComponent,
  ],
  templateUrl: './auth.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent {
  readonly #authService = inject(AuthService);
  readonly #store = inject(Store);

  readonly loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    hasRememberMe: new FormControl(false),
  });

  handleSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }
    this.#authService.login(this.loginForm.value as Auth);
  }
}
