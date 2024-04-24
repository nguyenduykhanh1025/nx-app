import { ChangeDetectionStrategy, Component, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from '../../data-access/models/navbar.model';
import { MyLibraryComponent } from '../my-library/my-library.component';
import { MenuDirective } from '@nx-app/web/libs';
import { MenuComponent } from '../menu/menu.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavbarItemComponent } from '../navbar-item/navbar-item.component';

@Component({
  selector: 'quiz-navbar',
  standalone: true,
  imports: [
    CommonModule,
    MenuDirective,
    MenuComponent,
    RouterLink,
    RouterLinkActive,
    NavbarItemComponent
  ],
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  @ViewChild("dynamicMenu", { read: ViewContainerRef, static: true })
  dynamicMenu: ViewContainerRef;

  readonly navbarList: Navbar[] = [
    {
      title: 'Trang chủ',
      link: '/home',
    },
    {
      title: 'Thư viện của bạn (Pending)',
      template: MyLibraryComponent,
    },
    {
      title: 'Lời giải chuyên gia',
      link: '/create-set',
    },
  ];

  openNavbarTemplate(appMenu: Navbar): void {
    if (!appMenu.template) {
      return;
    }

    this.dynamicMenu.clear();
    this.dynamicMenu.createComponent(appMenu.template);
  }
}
