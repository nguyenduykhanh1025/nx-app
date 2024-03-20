import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { mockAuthors } from '../../../../data-access/mocks/author.mock';
import { mockLessons } from '../../../../data-access/mocks/lesson.mock';
import { mockQuestions } from '../../../../data-access/mocks/question.mock';
import { mockRecommendedFeatures } from '../../../../data-access/mocks/recommended-feature.mock';
import { AuthorsComponent } from '../../ui/authors/authors.component';
import { LessonsComponent } from '../../ui/lessons/lessons.component';
import { QuestionsComponent } from '../../ui/questions/questions.component';
import { RecommendedFeaturesComponent } from '../../ui/recommended-features/recommended-features.component';

@Component({
  selector: 'quiz-home',
  standalone: true,
  imports: [CommonModule, RecommendedFeaturesComponent, LessonsComponent, QuestionsComponent, AuthorsComponent],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  mockLessons = mockLessons;
  mockQuestions = mockQuestions;
  mockRecommendedFeatures = mockRecommendedFeatures;
  mockAuthors = mockAuthors;
}
