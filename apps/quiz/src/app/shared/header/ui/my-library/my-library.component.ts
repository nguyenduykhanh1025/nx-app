import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'quiz-my-library',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-library.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyLibraryComponent {

}
