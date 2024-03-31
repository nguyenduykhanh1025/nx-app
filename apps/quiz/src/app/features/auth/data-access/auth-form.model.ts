import { AbstractControl, FormGroup } from "@angular/forms";

export interface AuthFormData {
    username: string | null;
    password: string | null;
}

export interface AuthFormGroup extends FormGroup {
    value: AuthFormData;
    controls: {
      username: AbstractControl;
      password: AbstractControl;
    };
  }