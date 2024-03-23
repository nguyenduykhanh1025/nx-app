import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'quiz-blank-layout',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blank-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlankLayoutComponent {}
