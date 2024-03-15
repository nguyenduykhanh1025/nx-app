import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'quiz-questions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './questions.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionsComponent {}
