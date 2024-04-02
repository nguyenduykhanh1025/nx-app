import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import { AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { LazyGetter } from 'lazy-get-decorator';

import { InputFieldSize, InputFieldType, ValidationErrorMassage } from '../../data-access/models';
import { ValidationErrorComponent } from '../../ui/validation-error/validation-error.component';

@Component({
  selector: 'ui-textfield',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, ReactiveFormsModule, ValidationErrorComponent],
  templateUrl: './textfield.component.html',
})
export class TextFieldComponent {

  @Input() size = InputFieldSize.MEDIUM;
  @Input() type = InputFieldType.EMAIL;
  @Input() control: AbstractControl;
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

  @LazyGetter() // every time this component is input, getter will be re-run => use it to restrict refresh
  get controlName(): string | null {
    if (!this.control) {
      return null;
    }

    const { parent } = this.control;

    if (!parent) {
      return null;
    }

    return Object.keys(parent.controls).find((keyFromGroup) => {
      return this.control === parent.get(keyFromGroup);
    }) || null;
  }
}
