import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiSize } from 'libs/web/ui/src/data-access';
import { IconComponent } from '../../../icon';
import { ProgressColor } from '../../data-access/models';

@Component({
  selector: 'ui-progress',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, IconComponent],
  templateUrl: './progress.component.html',
})
export class ProgressComponent {
  @Input() size: keyof typeof UiSize = 'MEDIUM';
  @Input() color: keyof typeof ProgressColor = 'PRIMARY';
  @Input() percent = 10;
  // TODO: handle this input
  @Input() isIndeterminate = true;

  get sizeClasses(): string {
    switch (this.size) {
      case 'SMALL':
        return 'h-0.5';
      case 'MEDIUM':
        return 'h-1';
      case 'LARGE':
        return 'h-1.5';
      default:
        return '';
    }
  }

  get colorClasses(): string {
    switch (this.color) {
      case 'PRIMARY':
        return 'bg-white';
      case 'SUCCESS':
        return 'bg-success';
      case 'ERROR':
        return 'bg-error';
      default:
        return '';
    }
  }
}
