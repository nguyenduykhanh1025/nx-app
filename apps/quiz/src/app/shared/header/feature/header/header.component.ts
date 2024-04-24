import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ComponentFactoryResolver, inject, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AppMenu } from '../../data-access/models/app-menu.model';
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
    NavbarComponent
  ],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent{
  @ViewChild("dynamicComponent", { read: ViewContainerRef, static: true })
  containerRef: ViewContainerRef;

  readonly #vcr = inject(ViewContainerRef);

  readonly appMenus: AppMenu[] = [
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

  solveSomething1(appMenu: AppMenu): void {
    // const com = this.#vcr.createComponent(MyLibraryComponent)
    if(!appMenu.template) {
      return;
    }

    this.containerRef.clear();
    this.containerRef.createComponent(appMenu.template);
  }
}
