import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'quiz-navbar-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarItemComponent {
  @Input() title: string;
  @Input() isActive = false;

  get activeClasses(): string {
    return this.isActive ? 'border-b-4 border-indigo-500' : '';
  }
}
