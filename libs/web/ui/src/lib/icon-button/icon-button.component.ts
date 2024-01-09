import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon/icon.component';
import { ButtonComponent } from '../button/button.component';
import { IconButtonShape } from '../models/icon-button-shape';

@Component({
  selector: 'ui-icon-button',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, IconComponent, ButtonComponent],
  templateUrl: './icon-button.component.html',
})
export class IconButtonComponent extends ButtonComponent{
  @Input() ariaLabel: string | undefined;
  @Input() dataRotate: boolean | undefined;
  @Input() shape = IconButtonShape.CIRCLE;

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
