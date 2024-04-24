import { ChangeDetectionStrategy, Component, EventEmitter, Output, TemplateRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItem } from '../../data-access/models';
import { MenuAbstractComponent } from '../../utility';

@Component({
  selector: 'ui-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent extends MenuAbstractComponent {
  // @ViewChild(TemplateRef, {static: true}) menuTemplate: TemplateRef<any>;
  // @Output() override uiItemClick = new EventEmitter<MenuItem>();
}
