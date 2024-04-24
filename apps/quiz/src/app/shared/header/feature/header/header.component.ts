import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AppMenu } from '../../data-access/models/app-menu.model';
import { MyLibraryComponent } from '../../ui/my-library/my-library.component';

@Component({
  selector: 'quiz-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  readonly appMenus: AppMenu[] = [
    {
      title: 'Trang chủ',
      link: '/home',
    },
    {
      title: 'Thư viện của bạn',
      template: MyLibraryComponent,
    },
    {
      title: 'Lời giải chuyên gia',
      link: '/create-set',
    },
  ];
}
