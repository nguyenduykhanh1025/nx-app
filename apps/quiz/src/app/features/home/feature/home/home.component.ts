import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { mockLessons } from '../../../../data-access/mocks/lesson.mock';
import { LessonsComponent } from '../../ui/lessons/lessons.component';
import { RecommendedFeatureComponent } from '../../ui/recommended-feature/recommended-feature.component';
import {
  RecommendedFeatureBgColor,
  RecommendedFeatureBgImage,
} from '../../utility/models';

@Component({
  selector: 'quiz-home',
  standalone: true,
  imports: [CommonModule, RecommendedFeatureComponent, LessonsComponent],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  protected RecommendedFeatureBgColor = RecommendedFeatureBgColor;
  protected RecommendedFeatureBgImage = RecommendedFeatureBgImage;

  mockLessons = mockLessons;
}
