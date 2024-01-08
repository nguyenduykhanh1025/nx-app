import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIcon } from '../model/svg-icon';
import { ButtonSize } from '../model/button-size';
import { IconComponent } from '../icon/icon.component';
import { SpinnerComponent } from '../spinner/spinner.component';
import { SnipperSize } from '../model/snipper-size';
import { ButtonType } from '../model/button-type';

@Component({
  selector: 'ui-button',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule, IconComponent, SpinnerComponent],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() svgIcon: SvgIcon = '';
  @Input() isLoading = false;
  @Input() isDisabled = false;
  @Input() size = ButtonSize.MEDIUM;
  @Input() type = ButtonType.PRIMARY;

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
        return 'bg-transparent border-2 border-secondary hover:bg-button-transparent-hover';
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
   return 'cursor-not-allowed text-disabled bg-transparent border-2 border-disabled hover:bg-transparent'
  }

  @HostListener('click', ['$event'])
  onClick(event: Event): void {
    event.stopPropagation();
    event.preventDefault();
    this.uiClick.emit();
  }
}
