import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFieldSize } from './models/input-field-size';
import { InputFieldType } from './models/input-field-type';

@Component({
  selector: 'ui-textfield',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  templateUrl: './textfield.component.html',
})
export class TextFieldComponent {
  @Input() size = InputFieldSize.MEDIUM;
  @Input() type = InputFieldType.EMAIL;

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
