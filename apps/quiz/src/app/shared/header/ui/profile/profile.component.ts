import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent, AvatarSize, ButtonComponent } from '@nx-app/web/libs';
import { ButtonType } from '../../../../../../../../libs/web/ui/src/lib/buttons/models/button-type';

@Component({
  selector: 'quiz-profile',
  standalone: true,
  imports: [CommonModule, AvatarComponent, ButtonComponent],
  templateUrl: './profile.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent {
  readonly AvatarSize = AvatarSize;
  readonly ButtonType = ButtonType;
}
