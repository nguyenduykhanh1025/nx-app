import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'quiz-user-link',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-link.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserLinkComponent {}
