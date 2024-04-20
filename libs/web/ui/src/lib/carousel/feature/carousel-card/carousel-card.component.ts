import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselRow } from '../../data-access/models';
import { Pagination } from 'libs/web/ui/src/data-access';
import { CarouselCardStepperComponent } from '../../ui/carousel-card-stepper/carousel-card-stepper.component';

@Component({
  selector: 'ui-carousel-card',
  standalone: true,
  imports: [CommonModule, CarouselCardStepperComponent],
  templateUrl: './carousel-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselCardComponent {
  @Input() rows: CarouselRow[];
  @Input() templateRef: TemplateRef<unknown>;
  @Input() pagination: Pagination;

  @Output() next = new EventEmitter<void>;
  @Output() previous = new EventEmitter<void>;

  protected get isShowLeftStep(): boolean {
    return this.pagination && this.pagination.number !== 1;
  }

  protected get isShowRightStep(): boolean {
    if (!this.pagination) {
      return false;
    }

    const { number, size, totalElements } = this.pagination;
    return number * size < totalElements;
  }

  onNext() {
    this.next.emit();
  }

  onPrevious() {
    this.previous.emit();
  }
}
