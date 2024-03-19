import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { mockLessons } from '../../../../data-access/mocks/lesson.mock';
import { mockQuestions } from '../../../../data-access/mocks/question.mock';
import { LessonsComponent } from '../../ui/lessons/lessons.component';
import { QuestionsComponent } from '../../ui/questions/questions.component';
import { RecommendedFeaturesComponent } from '../../ui/recommended-features/recommended-features.component';

@Component({
  selector: 'quiz-home',
  standalone: true,
  imports: [CommonModule, RecommendedFeaturesComponent, LessonsComponent, QuestionsComponent],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  mockLessons = mockLessons;
  mockQuestions = mockQuestions;
}
