import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ButtonComponent,
  FlashCardComponent,
  IconComponent,
} from '@nx-app/web/libs';
import { ButtonType } from 'libs/web/ui/src/lib/model/button-type';
import { IconButtonComponent } from '../../../../../../libs/web/ui/src/lib/icon-button/icon-button.component';
import { ButtonSize } from 'libs/web/ui/src/lib/model/button-size';

@Component({
  selector: 'quiz-main-layout',
  standalone: true,
  imports: [
    CommonModule,
    IconComponent,
    FlashCardComponent,
    ButtonComponent,
    IconButtonComponent,
  ],
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLayoutComponent {
  ButtonType = ButtonType;
  ButtonSize = ButtonSize;

  something() {
    console.log('sdasdad');
  }
}
