import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { UiShape } from 'libs/web/ui/src/data-access';

@Component({
  selector: 'ui-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageComponent {
  @Input() alt: string;
  @Input() src: string;
  @Input() shape: keyof typeof UiShape = 'SQUARE';

  get shapeClasses(): string {
    if (this.shape === 'CIRCLE') {
      return 'rounded-[50%]';
    }
    return '';
  }
}
