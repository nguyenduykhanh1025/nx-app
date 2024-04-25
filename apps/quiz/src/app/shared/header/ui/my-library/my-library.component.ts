import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ButtonComponent,
  TabComponent,
  TabsetComponent,
} from '@nx-app/web/libs';
import { ButtonType } from '../../../../../../../../libs/web/ui/src/lib/buttons/models/button-type';

@Component({
  selector: 'quiz-my-library',
  standalone: true,
  imports: [CommonModule, TabsetComponent, TabComponent, ButtonComponent],
  templateUrl: './my-library.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyLibraryComponent {
  readonly ButtonType = ButtonType;
}
