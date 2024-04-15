import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'quiz-language-selection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './language-selection.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageSelectionComponent {}
