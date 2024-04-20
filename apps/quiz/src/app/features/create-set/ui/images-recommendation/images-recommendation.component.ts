import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ButtonComponent,
  CarouselCardComponent,
  TextFieldComponent,
} from '@nx-app/web/libs';
import { FormControl, FormGroup } from '@angular/forms';
import { Pagination } from 'libs/web/ui/src/data-access';

@Component({
  selector: 'quiz-images-recommendation',
  standalone: true,
  imports: [
    CommonModule,
    TextFieldComponent,
    ButtonComponent,
    CarouselCardComponent,
  ],
  templateUrl: './images-recommendation.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImagesRecommendationComponent {
  readonly form = new FormGroup({
    search: new FormControl(''),
  });

  protected readonly pagination: Pagination = {
    totalElements: 10,
    size: 5,
    number: 1,
  };
}
