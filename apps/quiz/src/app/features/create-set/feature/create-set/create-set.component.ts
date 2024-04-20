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
  CarouselCardComponent,
} from '@nx-app/web/libs';
import { mockPopoverLanguages } from '@quiz-app/data-access/mocks';
import {
  CdkDragDrop,
  CdkDropList,
  CdkDrag,
  moveItemInArray,
  CdkDragHandle,
} from '@angular/cdk/drag-drop';
import { Pagination } from 'libs/web/ui/src/data-access';

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
    CarouselCardComponent,
  ],
  templateUrl: './create-set.component.html',
  styleUrls: ['./create-set.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateSetComponent {
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
  protected readonly pagination: Pagination = {
    totalElements: 10,
    size: 5,
    number: 1,
  };
  protected readonly ButtonType = ButtonType;
  protected readonly ButtonSize = ButtonSize;

  protected idxShownImagesRecommendation = -1;

  handleLanguageSelection(event: PopoverItem) {
    console.log(event);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.terms, event.previousIndex, event.currentIndex);
  }

  onToggleImagesRecommendation(idx: number) {
    this.idxShownImagesRecommendation =
      idx === this.idxShownImagesRecommendation ? -1 : idx;
  }
}
