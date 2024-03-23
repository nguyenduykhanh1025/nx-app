import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  AvatarComponent,
  ButtonComponent,
  CardComponent,
  FlashCardComponent,
  IconButtonComponent,
  IconComponent,
  ProgressComponent,
  TagComponent,
  TextAreaComponent,
  TextFieldComponent,
  TooltipDirective,
} from '@nx-app/web/libs';
import { FooterComponent } from '@quiz-app/shared/footer/feature/footer/footer.component';
import { HeaderComponent } from '@quiz-app/shared/header/feature/header/header.component';


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
    TextAreaComponent,
    TooltipDirective,
    RouterModule,
    FooterComponent,
    HeaderComponent
  ],
  templateUrl: './main-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLayoutComponent {}
