import { ChangeDetectionStrategy, Component, TemplateRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent {
  @ViewChild(TemplateRef, {static: true}) menuTemplate: TemplateRef<any>;
}
