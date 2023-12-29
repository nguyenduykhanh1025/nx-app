import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonIconComponent, IconComponent } from '@nx-app/web/libs';

@Component({
  selector: 'quiz-main-layout',
  standalone: true,
  imports: [CommonModule, IconComponent, ButtonIconComponent],
  templateUrl: './main-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLayoutComponent {}
