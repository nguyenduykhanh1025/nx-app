import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CardComponent, ImageComponent, TagComponent } from '@nx-app/web/libs';

import { Lesson } from '../../../../data-access/models/lesson.model';
import { UserLinkComponent } from '../user-link/user-link.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'quiz-lesson',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    TagComponent,
    ImageComponent,
    UserLinkComponent,
    RouterLink
  ],
  templateUrl: './lesson.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LessonComponent {
  @Input({required: true}) lesson: Lesson;
}
