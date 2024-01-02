import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonIconComponent, FlashCardComponent, IconComponent } from '@nx-app/web/libs';

@Component({
  selector: 'quiz-main-layout',
  standalone: true,
  imports: [CommonModule, IconComponent, ButtonIconComponent, FlashCardComponent],
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLayoutComponent {}
