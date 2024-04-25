import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ButtonComponent,
  TabComponent,
  TabsetComponent,
} from '@nx-app/web/libs';

@Component({
  selector: 'quiz-my-library',
  standalone: true,
  imports: [CommonModule, TabsetComponent, TabComponent, ButtonComponent],
  templateUrl: './my-library.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyLibraryComponent {
}
