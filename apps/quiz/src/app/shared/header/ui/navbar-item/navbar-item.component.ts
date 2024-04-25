import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent, IconSize, SvgIcon } from '@nx-app/web/libs';

@Component({
  selector: 'quiz-navbar-item',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './navbar-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarItemComponent {
  @Input() title: string;
  @Input() isActive = false;
  @Input() svgIcon: SvgIcon | undefined;

  readonly IconSize = IconSize;

  get activeClasses(): string {
    return this.isActive ? 'border-b-4 border-indigo-500' : '';
  }
}
