import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../../icon';
import { CarouseStepperDirection } from '../../data-access/models';

@Component({
  selector: 'ui-carousel-card-stepper',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './carousel-card-stepper.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselCardStepperComponent {
  @Input() direction: keyof typeof CarouseStepperDirection = 'LEFT';

  protected get directionClasses(): string {
    if (this.direction === 'LEFT') {
      return 'bg-gradient-to-l left-0';
    }
    return 'bg-gradient-to-r right-0';
  }

  protected get svgIcon(): string {
    if (this.direction === 'LEFT') {
      return 'left-circle-o';
    }
    return 'right-circle-o';
  }
}
