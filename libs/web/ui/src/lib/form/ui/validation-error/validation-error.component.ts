import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AbstractControl, ReactiveFormsModule } from '@angular/forms';

import { ValidationErrorMassage } from '../../data-access/models';

@Component({
  selector: 'ui-validation-error',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './validation-error.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush, TODO: currently, try to use OnPush here
})
export class ValidationErrorComponent {
  @Input() control: AbstractControl;

  protected errorKeys: string[];

  #errorMessage: ValidationErrorMassage;

  get errorMessage(): ValidationErrorMassage {
    return this.#errorMessage;
  }

  @Input()
  set errorMessage(value: ValidationErrorMassage | undefined) {
    if (!value) {
      return;
    }

    this.#errorMessage = value;
    this.errorKeys = Object.keys(value);
  }
}
