import {
  ChangeDetectionStrategy,
  Component,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from '../../data-access/models/navbar.model';
import { MyLibraryComponent } from '../my-library/my-library.component';
import { MenuComponent, MenuDirective } from '@nx-app/web/libs';
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
    NavbarItemComponent,
  ],
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  @ViewChild('dynamicMenu', { read: ViewContainerRef, static: true })
  dynamicMenu: ViewContainerRef;

  idxActiveNavBar = 0;

  readonly navbarList: Navbar[] = [
    {
      title: 'Trang chủ',
      link: '/home',
      svgIcon: undefined,
    },
    {
      title: 'Thư viện của bạn',
      template: MyLibraryComponent,
      svgIcon: 'down-o',
    },
    {
      title: 'Lời giải chuyên gia',
      link: '/create-set',
      svgIcon: undefined,
    },
  ];

  openNavbarTemplate(appMenu: Navbar, idx: number): void {
    this.idxActiveNavBar = idx;
    if (!appMenu.template) {
      return;
    }

    this.dynamicMenu.clear();
    this.dynamicMenu.createComponent(appMenu.template);
  }

  handleActiveNavbar(idx: number) {
    this.idxActiveNavBar = idx;
  }
}
