import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon/icon.component';
import { ProgressSize } from './models/progress-size';
import { ProgressColor } from './models/progress-color';

@Component({
  selector: 'ui-progress',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, IconComponent],
  templateUrl: './progress.component.html',
})
export class ProgressComponent {
  @Input() size = ProgressSize.MEDIUM;
  @Input() color = ProgressColor.PRIMARY;
  @Input() percent = 10;
  // TODO: handle this input
  @Input() isIndeterminate = true;

  get sizeClasses(): string {
    switch (this.size) {
      case ProgressSize.SMALL:
        return 'h-0.5';
      case ProgressSize.MEDIUM:
        return 'h-1';
      case ProgressSize.LARGE:
        return 'h-1.5';
      default:
        return '';
    }
  }

  get colorClasses(): string {
    switch (this.color) {
      case ProgressColor.PRIMARY:
        return 'bg-white';
      case ProgressColor.SUCCESS:
        return 'bg-success';
      case ProgressColor.ERROR:
        return 'bg-error';
      default:
        return '';
    }
  }
}
