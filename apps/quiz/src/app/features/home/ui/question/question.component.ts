import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CardComponent } from '@nx-app/web/libs';

import { Question } from '../../../../data-access/models/question.model';

@Component({
  selector: 'quiz-question',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './question.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionComponent {
  @Input({required: true}) question: Question;
}
