import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { InputFieldType, TextFieldComponent } from '@nx-app/web/libs';
import { FormControlComponent } from 'libs/web/ui/src/lib/form/feature/form-control/form-control.component';

@Component({
  selector: 'quiz-auth-form-field',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TextFieldComponent],
  templateUrl: './auth-form-field.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthFormFieldComponent extends FormControlComponent {
  @Input() label: string;
  @Input() placeholder: string;
  @Input() inputType: keyof typeof InputFieldType;
}
