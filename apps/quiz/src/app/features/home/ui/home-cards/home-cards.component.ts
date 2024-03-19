import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, ContentChildren, ElementRef, Input, QueryList, TemplateRef, ViewChildren, ViewContainerRef } from '@angular/core';
import { IconComponent, IconSize } from '@nx-app/web/libs';

import { HomeCardRow } from '../../data-access/models/home-card-row.model';
import { LessonComponent } from '../lesson/lesson.component';

@Component({
  selector: 'quiz-home-cards',
  standalone: true,
  imports: [CommonModule, IconComponent, NgTemplateOutlet],
  templateUrl: './home-cards.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeCardsComponent{
  @Input() title: string;
  @Input() rows: HomeCardRow[];
  @Input() templateRef: TemplateRef<unknown>;

  protected IconSize = IconSize;
}
