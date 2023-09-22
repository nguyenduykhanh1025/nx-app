import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { ButtonComponent } from '@nx-app/button';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, ButtonComponent, MainLayoutComponent],
  selector: 'blog-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'blog';
}
