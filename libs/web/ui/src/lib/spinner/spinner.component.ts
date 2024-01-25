import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnipperSize } from './models/snipper-size';

@Component({
  selector: 'ui-spinner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spinner.component.html',
})
export class SpinnerComponent {
  @Input() size: SnipperSize = SnipperSize.MEDIUM;

  get height(): string {
    // TODO: declare class style for it
    switch (this.size) {
      case SnipperSize.SMALL:
        return 'h-4';
      case SnipperSize.MEDIUM:
        return 'h-6';
      case SnipperSize.LARGE:
        return 'h-8';
      default:
        return 'h-10';
    }
  }
}
