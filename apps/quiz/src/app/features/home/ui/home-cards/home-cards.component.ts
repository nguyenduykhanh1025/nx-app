import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CarouselCardComponent } from '@nx-app/web/libs';

@Component({
  selector: 'quiz-home-cards',
  standalone: true,
  imports: [CommonModule, CarouselCardComponent],
  templateUrl: './home-cards.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeCardsComponent extends CarouselCardComponent {
  @Input() title: string;
}
