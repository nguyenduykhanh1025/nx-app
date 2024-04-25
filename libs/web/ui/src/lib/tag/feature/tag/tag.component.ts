import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiSize } from 'libs/web/ui/src/data-access';
import { IconComponent } from '../../../icon';
import { TagColor } from '../../data-access/models/tag-color';

@Component({
  selector: 'ui-tag',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, IconComponent],
  templateUrl: './tag.component.html',
})
export class TagComponent {
  @Input() size: keyof typeof UiSize = 'MEDIUM';
  @Input() color: keyof typeof TagColor = 'PRIMARY';
  @Input() bordered = false;

  get sizeClasses(): string {
    switch (this.size) {
      case 'SMALL':
        return 'px-1.5 py-0.5';
      case 'MEDIUM':
        return 'px-2.5 py-0.5';
      case 'LARGE':
        return 'px-3.5 py-1.5';
      default:
        return '';
    }
  }

  get colorClasses(): string {
    switch (this.color) {
      case 'PRIMARY':
        return `bg-white text-primary ${
          this.bordered ? 'border border-primary' : ''
        }`;
      case 'SUCCESS':
        return `bg-white text-success ${
          this.bordered ? 'border border-success' : ''
        }`;
      case 'ERROR':
        return `bg-white text-error ${
          this.bordered ? 'border border-error' : ''
        }`;
      default:
        return '';
    }
  }
}
