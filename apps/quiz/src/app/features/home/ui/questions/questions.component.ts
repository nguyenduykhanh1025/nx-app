import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Question } from '../../../../data-access/models/question.model';
import { HomeCardsComponent } from '../home-cards/home-cards.component';
import { QuestionComponent } from '../question/question.component';

@Component({
  selector: 'quiz-questions',
  standalone: true,
  imports: [CommonModule, HomeCardsComponent, QuestionComponent],
  templateUrl: './questions.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionsComponent {
  @Input({ required: true }) questions: Question[];
}
