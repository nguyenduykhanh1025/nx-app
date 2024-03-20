import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Author } from '../../../../data-access/models/author.model';
import { AuthorComponent } from '../author/author.component';
import { HomeCardsComponent } from '../home-cards/home-cards.component';

@Component({
  selector: 'quiz-authors',
  standalone: true,
  imports: [CommonModule, HomeCardsComponent, AuthorComponent],
  templateUrl: './authors.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorsComponent {
  @Input({ required: true }) authors: Author[];

}
