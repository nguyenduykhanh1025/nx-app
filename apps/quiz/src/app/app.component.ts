import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

@Component({
  standalone: true,
  imports: [RouterModule, MainLayoutComponent],
  selector: 'quiz-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'quiz';
}
