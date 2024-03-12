import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';

import { IconComponent } from '../../icon/icon.component';
import { ButtonComponent } from '../button/button.component';
import { ButtonType } from '../models/button-type';
import { IconButtonShape } from '../models/icon-button-shape';

@Component({
  selector: 'ui-icon-button',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, IconComponent, ButtonComponent],
  templateUrl: './icon-button.component.html',
})
export class IconButtonComponent extends ButtonComponent {
  @Input() ariaLabel: string | undefined;
  @Input() dataRotate: boolean | undefined;
  @Input() shape = IconButtonShape.CIRCLE;

  override get typeClasses(): string {
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

  get shapeClasses(): string {
    switch (this.shape) {
      case IconButtonShape.CIRCLE:
        return 'rounded-full';
      case IconButtonShape.SQUARE:
        return 'rounded-lg';
      default:
        return '';
    }
  }
}
