import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import {
  InputFieldSize,
  InputFieldType,
  ValidationErrorMassage,
} from '../../data-access/models';
import { ValidationErrorComponent } from '../../ui/validation-error/validation-error.component';
import { FormControlComponent } from '../form-control/form-control.component';

@Component({
  selector: 'ui-textfield',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, ReactiveFormsModule, ValidationErrorComponent],
  templateUrl: './textfield.component.html',
})
export class TextFieldComponent extends FormControlComponent {
  @Input() size = InputFieldSize.MEDIUM;
  @Input() type = InputFieldType.EMAIL;
  @Input() placeholder = '';
  @Input() errorMessage: ValidationErrorMassage;

  get sizeClasses(): string {
    switch (this.size) {
      case InputFieldSize.SMALL:
        return 'p-1.5';
      case InputFieldSize.MEDIUM:
        return 'p-2.5';
      case InputFieldSize.LARGE:
        return 'p-3.5';
      default:
        return '';
    }
  }
}
