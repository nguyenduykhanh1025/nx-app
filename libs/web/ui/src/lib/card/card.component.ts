import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon/icon.component';
import { CardType } from '../models/card-type';

@Component({
  selector: 'ui-card',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, IconComponent],
  templateUrl: './card.component.html',
})
export class CardComponent {
  @Input() type = CardType.PRIMARY;
  @Input() bordered = false;

  get typeClasses(): string {
    switch (this.type) {
      case CardType.PRIMARY:
        return 'bg-card-primary-active';
      default:
        return '';
    }
  }

  get borderedClasses(): string {
    if (this.bordered) {
      return 'border border-gray-200';
    }
    return '';
  }
}
