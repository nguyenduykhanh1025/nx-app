import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  ButtonComponent,
  CheckboxComponent,
  TextFieldComponent,
} from '@nx-app/web/libs';

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
  readonly loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    hasRememberMe: new FormControl(false),
  });

  handleSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }
    console.log(this.loginForm.value);
  }
}
