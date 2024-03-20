import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CardComponent, ImageComponent, TagComponent } from '@nx-app/web/libs';

import { Author } from '../../../../data-access/models/author.model';

@Component({
  selector: 'quiz-author',
  standalone: true,
  imports: [CommonModule, CardComponent, ImageComponent, TagComponent],
  templateUrl: './author.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorComponent {
  @Input({required: true}) author: Author;
}
