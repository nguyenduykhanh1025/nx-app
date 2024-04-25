import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';

import { ButtonComponent } from '../button/button.component';
import { UiShape } from 'libs/web/ui/src/data-access/models/ui-shape.model';
import { IconComponent } from '../../../icon';

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
  @Input() shape: keyof typeof UiShape = 'CIRCLE';

  override get typeClasses(): string {
    switch (this.type) {
      case 'PRIMARY':
        return 'bg-button-primary-active hover:bg-button-primary-hover';
      case 'SECONDARY':
        return 'bg-button-secondary-active hover:bg-button-secondary-hover';
      case 'TRANSPARENT':
        return 'bg-transparent border-secondary hover:bg-button-transparent-hover';
      default:
        return '';
    }
  }

  get shapeClasses(): string {
    switch (this.shape) {
      case 'CIRCLE':
        return 'rounded-full';
      case 'SQUARE':
        return 'rounded-lg';
      default:
        return '';
    }
  }
}
