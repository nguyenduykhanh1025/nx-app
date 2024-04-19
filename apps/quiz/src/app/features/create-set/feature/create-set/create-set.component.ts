import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
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
  PopoverItem,
  MenuDirective,
  MenuComponent,
  PopoverDirective,
  PopoverComponent,
} from '@nx-app/web/libs';
import { mockPopoverLanguages } from '@quiz-app/data-access/mocks';
import {
  CdkDragDrop,
  CdkDropList,
  CdkDrag,
  moveItemInArray,
  CdkDragHandle,
} from '@angular/cdk/drag-drop';

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
    MenuDirective,
    MenuComponent,
    PopoverDirective,
    PopoverComponent,
    CdkDropList,
    CdkDrag,
    CdkDragHandle,
  ],
  templateUrl: './create-set.component.html',
  styleUrls: ['./create-set.component.scss'],
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

  protected readonly terms = [1, 2, 3, 4, 5, 6];

  protected readonly mockedPopoverLanguages = mockPopoverLanguages();

  handleLanguageSelection(event: PopoverItem) {
    console.log(event);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.terms, event.previousIndex, event.currentIndex);
  }
}
