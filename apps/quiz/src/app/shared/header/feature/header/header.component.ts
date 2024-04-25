import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MyLibraryComponent } from '../../ui/my-library/my-library.component';
import { ButtonComponent, MenuDirective } from '@nx-app/web/libs';
import { MenuComponent } from '../../ui/menu/menu.component';
import { NavbarComponent } from '../../ui/navbar/navbar.component';

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
  ],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}
