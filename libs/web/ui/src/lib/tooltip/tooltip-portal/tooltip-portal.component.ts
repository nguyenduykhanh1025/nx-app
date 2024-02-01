import { FlexibleConnectedPositionStrategy } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  Input,
} from '@angular/core';

import { IconComponent } from '../../icon';
import { TooltipIconDirection } from '../models/tooltip-icon-direction';
import TooltipService from '../services/tooltip.service';

@Component({
  selector: 'ui-tooltip-portal',
  templateUrl: './tooltip-portal.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, IconComponent],
})
export class TooltipPortalComponent implements AfterViewInit {
  @Input() text = '';
  @Input() direction = TooltipIconDirection.BOTTOM;

  readonly #cdr = inject(ChangeDetectorRef);
  readonly #flexibleConnectedPositionStrategy = inject(
    FlexibleConnectedPositionStrategy
  );

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
      return `-mb-2`;
    } else if (this.direction === TooltipIconDirection.TOP) {
      return `-mt-2`;
    } else if (this.direction === TooltipIconDirection.LEFT) {
      return `-ml-2`;
    } else {
      return `-mr-2`;
    }
  }

  ngAfterViewInit(): void {
    this.#flexibleConnectedPositionStrategy.positionChanges.subscribe((res) => {
      this.direction = TooltipService.getTooltipIconDirection(
        res.connectionPair
      );
      this.#cdr.detectChanges();
    });
  }
}
