import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  AvatarComponent,
  ButtonComponent,
  FlashCardComponent,
  IconButtonComponent,
  IconComponent,
} from '@nx-app/web/libs';
import { ButtonType } from 'libs/web/ui/src/lib/model/button-type';
import { ButtonSize } from 'libs/web/ui/src/lib/model/button-size';
import { AvatarShape } from 'libs/web/ui/src/lib/model/avatar-shape';

@Component({
  selector: 'quiz-main-layout',
  standalone: true,
  imports: [
    CommonModule,
    IconComponent,
    FlashCardComponent,
    ButtonComponent,
    IconButtonComponent,
    AvatarComponent
  ],
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLayoutComponent {
  ButtonType = ButtonType;
  ButtonSize = ButtonSize;
  AvatarShape = AvatarShape;

  something() {
    console.log('sdasdad');
  }
}
