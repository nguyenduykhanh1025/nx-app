import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../../icon';
import { UiType } from 'libs/web/ui/src/data-access';

@Component({
  selector: 'ui-card',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, IconComponent],
  templateUrl: './card.component.html',
})
export class CardComponent {
  @Input() type: keyof typeof UiType = 'PRIMARY';
  @Input() bordered = false;

  get typeClasses(): string {
    switch (this.type) {
      case 'PRIMARY':
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
