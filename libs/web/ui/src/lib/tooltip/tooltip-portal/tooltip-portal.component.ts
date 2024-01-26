import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IconComponent } from '../../icon';
import { TooltipIconDirection } from '../models/tooltip-icon-direction';
import { CommonModule } from '@angular/common';

const CONTENT_DISTANCE = 2;

@Component({
  selector: 'ui-tooltip-portal',
  templateUrl: './tooltip-portal.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, IconComponent],
})
export class TooltipPortalComponent {
  @Input() text = '';
  @Input() direction = TooltipIconDirection.BOTTOM;

  get svgIcon(): string {
    if (this.direction === TooltipIconDirection.BOTTOM) {
      return 'arrow-down-f';
    } else if (this.direction === TooltipIconDirection.TOP) {
      return 'arrow-up-f';
    } else if (this.direction === TooltipIconDirection.LEFT) {
      return 'arrow-left-f';
    } else {
      return 'arrow-right-f';
    }
  }

  get containerFlexClasses(): string {
    if (this.direction === TooltipIconDirection.BOTTOM) {
      return 'flex-col';
    } else if (this.direction === TooltipIconDirection.TOP) {
      return 'flex-col-reverse';
    } else if (this.direction === TooltipIconDirection.LEFT) {
      return 'flex-row-reverse';
    } else {
      return 'flex-row';
    }
  }

  get contentClasses(): string {
    if (this.direction === TooltipIconDirection.BOTTOM) {
      return `-mb-${CONTENT_DISTANCE}`;
    } else if (this.direction === TooltipIconDirection.TOP) {
      return `-mt-${CONTENT_DISTANCE}`;
    } else if (this.direction === TooltipIconDirection.LEFT) {
      return `-ml-${CONTENT_DISTANCE}`;
    } else {
      return `-mr-${CONTENT_DISTANCE}`;
    }
  }
}
