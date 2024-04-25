import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../../icon';
import { SpinnerComponent } from '../../../spinner';
import { UiSize } from 'libs/web/ui/src/data-access';
import { UiShape } from 'libs/web/ui/src/data-access/models/ui-shape.model';

@Component({
  selector: 'ui-avatar',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, IconComponent, SpinnerComponent],
  templateUrl: './avatar.component.html',
})
export class AvatarComponent {
  @Input() src = '';
  @Input() size: keyof typeof UiSize = 'MEDIUM';
  @Input() shape: keyof typeof UiShape = 'CIRCLE';

  @Output() uiClick = new EventEmitter<void>();

  get sizeClasses(): string {
    switch (this.size) {
      case 'LARGE':
        return 'w-15 h-15';
      case 'MEDIUM':
        return 'w-12 h-12';
      case 'SMALL':
        return 'w-9 h-9';
      default:
        return '';
    }
  }

  get shapeClasses(): string {
    switch (this.shape) {
      case 'CIRCLE':
        return 'rounded-full';
      case 'SQUARE':
        return 'rounded';
      default:
        return '';
    }
  }

  @HostListener('click', ['$event'])
  onClick(event: Event): void {
    event.stopPropagation();
    event.preventDefault();
    this.uiClick.emit();
  }
}
