import { ChangeDetectionStrategy, Component} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-flash-card',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  styleUrls: ['./flash-card.component.scss'],
  templateUrl: './flash-card.component.html',
})
export class FlashCardComponent {
  isRotated = false;

  handleClick(): void {
    this.isRotated = !this.isRotated;
  }
}
