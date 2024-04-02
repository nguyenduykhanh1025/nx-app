import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
} from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { TextFieldComponent } from '@nx-app/web/libs';

export const weekendValidator: ValidatorFn = (
  control: AbstractControl
): null | { weekend: true } => {
  const value = control.value;
  if (value === 'nguyenduykhanh1025@gmail.com') {
    return { weekend: true };
  }
  return null;
};

@Component({
  selector: 'quiz-auth',
  standalone: true,
  imports: [CommonModule, TextFieldComponent, ReactiveFormsModule],
  templateUrl: './auth.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent {
  readonly #cdr = inject(ChangeDetectorRef);

  readonly loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email, weekendValidator]),
    password: new FormControl('', [
      Validators.required,
      Validators.maxLength(5),
    ]),
  });

  handleSubmit(): void {}
}
