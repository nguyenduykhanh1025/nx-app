import {
  ChangeDetectionStrategy,
  Component,
  Input,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-tab',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tab.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabComponent {
  @ViewChild('contentTemplate', { read: TemplateRef, static: true })
  contentTemplate: TemplateRef<any>;

  @Input({ required: true }) title: string;
}
