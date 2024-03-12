import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Lesson } from '../../../../data-access/models/lesson.model';
import { LessonComponent } from '../lesson/lesson.component';

@Component({
  selector: 'quiz-lessons',
  standalone: true,
  imports: [CommonModule, LessonComponent],
  templateUrl: './lessons.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LessonsComponent {
  @Input() title: string;
  @Input({ required: true }) lessons: Lesson[];
}
