import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIcon } from '../models/svg-icon';
import { ButtonSize } from '../models/button-size';
import { IconComponent } from '../icon/icon.component';
import { SpinnerComponent } from '../spinner/spinner.component';
import { SnipperSize } from '../models/snipper-size';
import { ButtonType } from '../models/button-type';

@Component({
  selector: 'ui-button',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, IconComponent, SpinnerComponent],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() svgIcon: SvgIcon = '';
  @Input() isLoading = false;
  @Input() isDisabled = false;
  @Input() size = ButtonSize.MEDIUM;
  @Input() type = ButtonType.PRIMARY;
  @Input() bordered = true;

  @Output() uiClick = new EventEmitter<void>();

  readonly SnipperSize = SnipperSize;

  get isShowIcon(): boolean {
    return !!this.svgIcon && !this.isLoading;
  }

  get typeClasses(): string {
    switch (this.type) {
      case ButtonType.PRIMARY:
        return 'bg-button-primary-active hover:bg-button-primary-hover';
      case ButtonType.SECONDARY:
        return 'bg-button-secondary-active hover:bg-button-secondary-hover';
      case ButtonType.TRANSPARENT:
        return 'bg-transparent border-secondary hover:bg-button-transparent-hover';
      default:
        return '';
    }
  }

  get sizeClasses(): string {
    switch (this.size) {
      case ButtonSize.LARGE:
        return 'px-5 py-5';
      case ButtonSize.MEDIUM:
        return 'px-3 py-3';
      case ButtonSize.SMALL:
        return 'px-1.5 py-1.5';
      default:
        return '';
    }
  }

  get disabledClasses(): string {
   if(!this.isDisabled) {
    return 'cursor-pointer text-active';
   }
   return 'cursor-not-allowed text-disabled bg-transparent border-disabled hover:bg-transparent'
  }

  get borderedClasses(): string {
    if(this.bordered && (this.type == ButtonType.TRANSPARENT || this.isDisabled)) {
      return 'border-2'
    }
    return 'border-0'
  }

  @HostListener('click', ['$event'])
  onClick(event: Event): void {
    event.stopPropagation();
    event.preventDefault();
    this.uiClick.emit();
  }
}
