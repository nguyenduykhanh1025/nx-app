import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';

const TEXT_AREA_DEFAULT_ROW = 4;

@Component({
  selector: 'ui-textarea',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  templateUrl: './textarea.component.html',
})
export class TextAreaComponent {
  @Input() rows = TEXT_AREA_DEFAULT_ROW;
}
