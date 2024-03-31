import {
  ChangeDetectionStrategy,
  Component,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextFieldComponent } from '@nx-app/web/libs';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AuthFormGroup } from '../../data-access/auth-form.model';

@Component({
  selector: 'quiz-auth',
  standalone: true,
  imports: [CommonModule, TextFieldComponent, ReactiveFormsModule],
  templateUrl: './auth.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent {
  readonly #fb = inject(FormBuilder);

  readonly loginForm = this.#fb.group({
    username: '',
    password: '',
  }) as AuthFormGroup;

  handleSubmit(): void {
    console.log(this.loginForm.value);
  }
}
