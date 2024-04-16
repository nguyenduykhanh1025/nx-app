import {
  ChangeDetectionStrategy,
  Component,
  Input,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopoverItem } from '../../data-access/popover-item.model';

@Component({
  selector: 'ui-popover',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './popover.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopoverComponent {
  @ViewChild(TemplateRef, { static: true }) menuTemplate: TemplateRef<any>;

  @Input() items: PopoverItem[] = [
    {
      title: 'Item1',
      items: [
        {
          title: 'Sub item 1'
        },
        {
          title: 'Sub item 2'
        }
      ]
    },
    {
      title: 'Item2',
    },
    {
      title: 'Item3',
    },
    {
      title: 'Item3',
    },
    {
      title: 'Item3',
    },
    {
      title: 'Item3',
    },
    {
      title: 'Item3',
    },
  ];
}
