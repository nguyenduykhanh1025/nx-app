import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { IconComponent, SvgIcon } from '../../../icon';
import { SpinnerComponent } from '../../../spinner';
import { UiSize } from 'libs/web/ui/src/data-access';
import { ButtonType } from '../../data-access/models';

@Component({
  selector: 'ui-button, [uiButton]',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, IconComponent, SpinnerComponent],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() svgIcon: SvgIcon = '';
  @Input() isLoading = false;
  @Input() isDisabled = false;
  @Input() size: keyof typeof UiSize = 'MEDIUM';
  @Input() type: ButtonType = 'PRIMARY';
  @Input() bordered = true;

  @Output() uiClick = new EventEmitter<void>();

  get isShowIcon(): boolean {
    return !!this.svgIcon && !this.isLoading;
  }

  get typeClasses(): string {
    switch (this.type) {
      case 'PRIMARY':
        return 'bg-button-primary-active hover:bg-button-primary-hover';
      case 'SECONDARY':
        return 'bg-button-secondary-active hover:bg-button-secondary-hover';
      case 'TRANSPARENT':
        return 'bg-transparent border-[#586380] hover:bg-button-transparent-hover';
      case 'LINK':
        return 'bg-transparent border-none hover:bg-button-transparent-hover';
      default:
        return '';
    }
  }

  get sizeClasses(): string {
    switch (this.size) {
      case 'LARGE':
        return 'px-5 py-5';
      case 'MEDIUM':
        return 'px-3 py-3';
      case 'SMALL':
        return 'px-1.5 py-1.5';
      default:
        return '';
    }
  }

  get disabledClasses(): string {
    if (!this.isDisabled) {
      return 'cursor-pointer text-active';
    }
    return 'cursor-not-allowed text-disabled bg-transparent border-disabled hover:bg-transparent';
  }

  get borderedClasses(): string {
    if (this.bordered && (this.type == 'TRANSPARENT' || this.isDisabled)) {
      return 'border-2';
    }
    return 'border-0';
  }

  @HostListener('click', ['$event'])
  onClick(event: Event): void {
    event.stopPropagation();
    event.preventDefault();
    this.uiClick.emit();
  }
}
