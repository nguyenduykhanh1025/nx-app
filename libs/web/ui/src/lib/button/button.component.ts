import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIcon } from '../model/svg-icon';
import { ButtonSize } from '../model/button-size';
import { IconComponent } from '../icon/icon.component';
import { SpinnerComponent } from '../spinner/spinner.component';
import { SnipperSize } from '../model/snipper-size';

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

  @Output() uiClick = new EventEmitter<void>();

  readonly SnipperSize = SnipperSize;

  get isShowIcon(): boolean {
    return !!this.svgIcon && !this.isLoading;
  }
}
