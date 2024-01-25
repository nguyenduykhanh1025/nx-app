import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon/icon.component';
import { TagSize } from './models/tag-size';
import { TagColor } from './models/tag-color';

@Component({
  selector: 'ui-tag',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, IconComponent],
  templateUrl: './tag.component.html',
})
export class TagComponent {
  @Input() size = TagSize.MEDIUM;
  @Input() color = TagColor.PRIMARY;
  @Input() bordered = false;

  get sizeClasses(): string {
    switch (this.size) {
      case TagSize.SMALL:
        return 'px-1.5 py-0.5';
      case TagSize.MEDIUM:
        return 'px-2.5 py-0.5';
      case TagSize.LARGE:
        return 'px-3.5 py-1.5';
      default:
        return '';
    }
  }

  get colorClasses(): string {
    switch (this.color) {
      case TagColor.PRIMARY:
        return `bg-white text-primary ${this.bordered ? 'border border-primary': ''}`;
      case TagColor.SUCCESS:
        return `bg-white text-success ${this.bordered ? 'border border-success': ''}`;
      case TagColor.ERROR:
        return `bg-white text-error ${this.bordered ? 'border border-error': ''}`;
      default:
        return '';
    }
  }
}
