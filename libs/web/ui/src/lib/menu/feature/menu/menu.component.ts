import { ChangeDetectionStrategy, Component, EventEmitter, Output, TemplateRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuAbstractComponent } from '../../utility';

@Component({
  selector: 'ui-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent extends MenuAbstractComponent {
}
