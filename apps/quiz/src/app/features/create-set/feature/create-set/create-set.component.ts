import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  ButtonComponent,
  ButtonSize,
  ButtonType,
  CardComponent,
  IconButtonComponent,
  TextAreaComponent,
  TextFieldComponent,
} from '@nx-app/web/libs';

@Component({
  selector: 'quiz-create-set',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    TextFieldComponent,
    ReactiveFormsModule,
    TextAreaComponent,
    IconButtonComponent,
    CardComponent,
  ],
  templateUrl: './create-set.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateSetComponent {
  protected readonly ButtonType = ButtonType;
  protected readonly ButtonSize = ButtonSize;

  readonly createSetForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    schoolName: new FormControl(''),
    subjectName: new FormControl(''),
  });

  readonly lessonForm = new FormGroup({
    schoolName: new FormControl(''),
    subjectName: new FormControl(''),
  });
}
