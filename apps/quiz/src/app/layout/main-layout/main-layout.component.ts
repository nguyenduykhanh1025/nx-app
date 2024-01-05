import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonComponent, ButtonIconComponent, FlashCardComponent, IconComponent } from '@nx-app/web/libs';
import { ButtonType } from 'libs/web/ui/src/lib/model/button-type';

@Component({
  selector: 'quiz-main-layout',
  standalone: true,
  imports: [CommonModule, IconComponent, ButtonIconComponent, FlashCardComponent, ButtonComponent],
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLayoutComponent {
  ButtonType = ButtonType;
}
