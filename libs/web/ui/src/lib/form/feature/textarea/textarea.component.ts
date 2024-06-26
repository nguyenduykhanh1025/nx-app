import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { ValidationErrorComponent } from '../../ui/validation-error/validation-error.component';
import { FormControlComponent } from '../form-control/form-control.component';

const TEXT_AREA_DEFAULT_ROW = 4;

@Component({
  selector: 'ui-textarea',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, ValidationErrorComponent, ReactiveFormsModule],
  templateUrl: './textarea.component.html',
})
export class TextAreaComponent extends FormControlComponent{
  @Input() rows = TEXT_AREA_DEFAULT_ROW;
  @Input() placeholder = '';
}
