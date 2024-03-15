import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IconComponent, IconSize } from '@nx-app/web/libs';

import { Lesson } from '../../../../data-access/models/lesson.model';
import { LessonComponent } from '../lesson/lesson.component';

@Component({
  selector: 'quiz-lessons',
  standalone: true,
  imports: [CommonModule, LessonComponent, IconComponent],
  templateUrl: './lessons.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./lessons.component.scss']
})
export class LessonsComponent {
  @Input() title: string;
  @Input({ required: true }) lessons: Lesson[];

  protected IconSize = IconSize;
}
