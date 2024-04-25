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
  CardComponent,
  IconButtonComponent,
  TextAreaComponent,
  TextFieldComponent,
  MenuDirective,
  MenuComponent,
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
import { ImagesRecommendationComponent } from '../../ui/images-recommendation/images-recommendation.component';
import { PopoverItem } from 'libs/web/ui/src/lib/menu/data-access/models';

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
    MenuDirective,
    PopoverComponent,
    CdkDropList,
    CdkDrag,
    CdkDragHandle,
    ImagesRecommendationComponent,
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
