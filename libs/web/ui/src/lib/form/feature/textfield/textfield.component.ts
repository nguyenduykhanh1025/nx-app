import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import {
  InputFieldSize,
  InputFieldStyleVariant,
  InputFieldType,
} from '../../data-access/models';
import { ValidationErrorComponent } from '../../ui/validation-error/validation-error.component';
import { FormControlComponent } from '../form-control/form-control.component';
import { UiSize } from 'libs/web/ui/src/data-access';

@Component({
  selector: 'ui-textfield',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, ReactiveFormsModule, ValidationErrorComponent],
  templateUrl: './textfield.component.html',
})
export class TextFieldComponent extends FormControlComponent {
  @Input() size: keyof typeof UiSize;
  @Input() type: InputFieldType;
  @Input() placeholder = '';
  @Input() styleVariant: keyof typeof InputFieldStyleVariant = 'NORMAL';

  get sizeClasses(): string {
    switch (this.size) {
      case 'SMALL':
        return 'p-1.5';
      case 'MEDIUM':
        return 'p-2.5';
      case 'LARGE':
        return 'p-3.5';
      default:
        return '';
    }
  }

  get variantClasses(): string {
    switch (this.styleVariant) {
      case 'CARD':
        return 'rounded-none border-b-2 border-solid';
      case 'TRANSPARENT':
        return 'rounded-none border-b-2 border-solid bg-transparent ';
      default:
        return 'rounded-xl border-none';
    }
  }
}
