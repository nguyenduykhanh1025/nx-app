import { CommonModule, NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  TemplateRef,
} from '@angular/core';
import { IconComponent, IconSize } from '@nx-app/web/libs';

import { HomeCardRow } from '../../data-access/models/home-card-row.model';
import { TablePage } from '@quiz-app/data-access/models/table-page.model';
import { HomeCardStepperComponent } from '../home-card-stepper/home-card-stepper.component';

@Component({
  selector: 'quiz-home-cards',
  standalone: true,
  imports: [
    CommonModule,
    IconComponent,
    NgTemplateOutlet,
    HomeCardStepperComponent,
  ],
  templateUrl: './home-cards.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeCardsComponent {
  @Input() title: string;
  @Input() rows: HomeCardRow[];
  @Input() templateRef: TemplateRef<unknown>;
  @Input() tablePage: TablePage;

  protected IconSize = IconSize;

  protected get isShowLeftStep(): boolean {
    return this.tablePage.number !== 1;
  }

  protected get isShowRightStep(): boolean {
    const { number, size, totalElements } = this.tablePage;
    // TODO: check this logic again
    return number * size < totalElements;
  }
}
