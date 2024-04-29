import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { LazyGetter } from 'lazy-get-decorator';

import { ValidationErrorMassage } from '../../data-access/models';

@Component({
  standalone: true,
  template: '',
})
export class FormControlComponent {
  @Input() control: AbstractControl;
  @Input() errorMessage: ValidationErrorMassage;

  @LazyGetter() // every time this component is input, getter will be re-run => use it to restrict refresh
  get controlName(): string | null {
    if (!this.control) {
      return null;
    }

    const { parent } = this.control;

    if (!parent) {
      return null;
    }

    return (
      Object.keys(parent.controls).find((keyFromGroup) => {
        return this.control === parent.get(keyFromGroup);
      }) || null
    );
  }

  @LazyGetter()
  get uniqueId(): string {
    return `${this.controlName}-uniqueId`
  }
}
