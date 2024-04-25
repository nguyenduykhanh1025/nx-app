import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiSize } from 'libs/web/ui/src/data-access';

@Component({
  selector: 'ui-spinner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spinner.component.html',
})
export class SpinnerComponent {
  @Input() size: keyof typeof UiSize = 'MEDIUM';

  get height(): string {
    // TODO: declare class style for it
    switch (this.size) {
      case 'SMALL':
        return 'h-4';
      case 'MEDIUM':
        return 'h-6';
      case 'LARGE':
        return 'h-8';
      default:
        return 'h-10';
    }
  }
}
