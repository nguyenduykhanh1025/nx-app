import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent, ButtonComponent } from '@nx-app/web/libs';

@Component({
  selector: 'quiz-profile',
  standalone: true,
  imports: [CommonModule, AvatarComponent, ButtonComponent],
  templateUrl: './profile.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent {
}
