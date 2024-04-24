import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuAbstractComponent } from 'libs/web/ui/src/lib/menu/utility';

@Component({
  selector: 'quiz-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent extends MenuAbstractComponent{}
