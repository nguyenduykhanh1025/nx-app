import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CheckboxComponent, TextFieldComponent } from '@nx-app/web/libs';

@Component({
  selector: 'quiz-auth',
  standalone: true,
  imports: [CommonModule, TextFieldComponent, ReactiveFormsModule, CheckboxComponent],
  templateUrl: './auth.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent {

  readonly loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    hasRememberMe: new FormControl(false)
  });

  handleSubmit(): void {
    console.log(this.loginForm.value);
  }
}
