import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  OnInit,
  QueryList,
} from '@angular/core';
import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { TabComponent } from '../tab/tab.component';
import { ButtonComponent } from '../../../buttons';

@Component({
  selector: 'ui-tabset',
  standalone: true,
  imports: [CommonModule, NgTemplateOutlet, ButtonComponent],
  templateUrl: './tabset.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsetComponent {
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

  idxActiveTab = 0;

  handleSelectedIndexChange(idx: number): void {
    this.idxActiveTab = idx;
  }
}
