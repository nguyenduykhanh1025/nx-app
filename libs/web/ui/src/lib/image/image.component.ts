import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { ImageShape } from './models/image-shape';

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
  @Input() shape: keyof typeof ImageShape = 'SQUARE';

  get shapeClasses(): string {
    if (this.shape === ImageShape.CIRCLE.toString()) {
      return 'rounded-[50%]';
    }
    return '';
  }
}
