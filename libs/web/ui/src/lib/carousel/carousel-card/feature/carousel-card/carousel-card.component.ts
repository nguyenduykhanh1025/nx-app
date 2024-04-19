// TODO: implement it!
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-carousel-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselCardComponent {}
