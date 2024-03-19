import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IconComponent, IconSize } from '@nx-app/web/libs';

import { HomeCardStepper } from '../../data-access/models';

@Component({
  selector: 'quiz-home-card-stepper',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './home-card-stepper.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeCardStepperComponent {
  @Input() direction: keyof typeof HomeCardStepper = 'LEFT';

  protected IconSize = IconSize;

  protected get directionClasses(): string {
    if(this.direction === HomeCardStepper.LEFT) {
      return 'bg-gradient-to-l left-0'
    }
    return 'bg-gradient-to-r right-0'
  }

  protected get svgIcon(): string {
    if(this.direction === HomeCardStepper.LEFT) {
      return 'left-circle-o'
    }
    return 'right-circle-o'
  }
}
