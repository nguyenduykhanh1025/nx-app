import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon/icon.component';
import { ButtonComponent } from '../button/button.component';
import { SvgIcon } from '../model/svg-icon';

@Component({
  selector: 'ui-button-icon',
  standalone: true,
  imports: [CommonModule, IconComponent, ButtonComponent],
  templateUrl: './button-icon.component.html',
})
export class ButtonIconComponent {
  @Input() svgIcon: SvgIcon = '';
  @Input() ariaLabel: string | undefined;
  @Input() dataRotate: boolean | undefined;
}
