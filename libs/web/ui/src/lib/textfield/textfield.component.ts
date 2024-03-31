import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFieldSize } from './models/input-field-size';
import { InputFieldType } from './models/input-field-type';
import { AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { LazyGetter } from 'lazy-get-decorator';

@Component({
  selector: 'ui-textfield',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './textfield.component.html',
})
export class TextFieldComponent {
  @Input() size = InputFieldSize.MEDIUM;
  @Input() type = InputFieldType.EMAIL;
  @Input() control?: AbstractControl;
  @Input() placeholder = '';

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
