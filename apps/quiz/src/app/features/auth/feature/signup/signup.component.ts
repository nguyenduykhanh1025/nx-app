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
import { RouterLink } from '@angular/router';
import { AuthFormFieldComponent } from '../../ui/auth-form-field/auth-form-field.component';

@Component({
  selector: 'quiz-signup',
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
  templateUrl: './signup.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignupComponent {
  readonly loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    confirmedPassword: new FormControl('', [Validators.required]),
  });

  handleSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }
    console.log(this.loginForm.value);
  }
}
