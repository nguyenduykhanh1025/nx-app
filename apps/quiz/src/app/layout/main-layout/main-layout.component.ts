import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  AvatarComponent,
  ButtonComponent,
  CardComponent,
  FlashCardComponent,
  IconButtonComponent,
  IconComponent,
  TagComponent,
  ProgressComponent,
  TextFieldComponent,
  TextAreaComponent
} from '@nx-app/web/libs';
import { AvatarShape } from 'libs/web/ui/src/lib/models/avatar-shape';
import { ButtonSize } from 'libs/web/ui/src/lib/models/button-size';
import { ButtonType } from 'libs/web/ui/src/lib/models/button-type';

@Component({
  selector: 'quiz-main-layout',
  standalone: true,
  imports: [
    CommonModule,
    IconComponent,
    FlashCardComponent,
    ButtonComponent,
    IconButtonComponent,
    AvatarComponent,
    TagComponent,
    CardComponent,
    ProgressComponent,
    TextFieldComponent,
    TextAreaComponent
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
