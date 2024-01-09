import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon/icon.component';
import { SpinnerComponent } from '../spinner/spinner.component';
import { AvatarSize } from '../models/avatar-size';
import { AvatarShape } from '../models/avatar-shape';

@Component({
  selector: 'ui-avatar',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, IconComponent, SpinnerComponent],
  templateUrl: './avatar.component.html',
})
export class AvatarComponent {
  @Input() src = '';
  @Input() size = AvatarSize.MEDIUM;
  @Input() shape = AvatarShape.CIRCLE;

  @Output() uiClick = new EventEmitter<void>();

  get sizeClasses(): string {
    switch (this.size) {
      case AvatarSize.LARGE:
        return 'w-15 h-15';
      case AvatarSize.MEDIUM:
        return 'w-12 h-12';
      case AvatarSize.SMALL:
        return 'w-9 h-9';
      default:
        return '';
    }
  }

  get shapeClasses(): string {
    switch (this.shape) {
      case AvatarShape.CIRCLE:
        return 'rounded-full';
      case AvatarShape.SQUARE:
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
