import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MyLibraryComponent } from '../../ui/my-library/my-library.component';
import {
  AvatarComponent,
  ButtonComponent,
  IconButtonComponent,
  IconComponent,
  MenuComponent,
  MenuDirective,
  TextFieldComponent,
} from '@nx-app/web/libs';
import { NavbarComponent } from '../../ui/navbar/navbar.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from '../../ui/profile/profile.component';

@Component({
  selector: 'quiz-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    MyLibraryComponent,
    ButtonComponent,
    MenuDirective,
    MenuComponent,
    NavbarComponent,
    ReactiveFormsModule,
    TextFieldComponent,
    IconComponent,
    IconButtonComponent,
    AvatarComponent,
    ProfileComponent,
  ],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  readonly form = new FormGroup({
    search: new FormControl(''),
  });
}
