import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
} from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

import { IconSize } from './models/icon-size';
import { SvgIcon } from './models/svg-icon';

const ICON_SPRITE_FILE_PATH = '/assets/sprite.svg';

@Component({
  selector: 'ui-icon',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, MatIconModule],
  templateUrl: './icon.component.html',
})
export class IconComponent {
  @Input() svgIcon: SvgIcon = '';
  @Input() ariaLabel: string | undefined;
  @Input() dataRotate: boolean | undefined;
  @Input() size = IconSize.SMALL;

  get ariaHidden(): boolean {
    return !!this.ariaLabel;
  }

  get sizeClasses(): string {
    const { SMALL, MEDIUM, EXTRA_SMALL } = IconSize;
    switch (this.size) {
      case EXTRA_SMALL:
        return 'h-4 w-4';
      case SMALL:
        return 'h-6 w-6';
      case MEDIUM:
        return 'h-8 w-8';
      default:
        return '';
    }
  }

  private iconRegistry = inject(MatIconRegistry);
  private sanitizer = inject(DomSanitizer);

  constructor() {
    this.iconRegistry.addSvgIconSet(
      this.sanitizer.bypassSecurityTrustResourceUrl(ICON_SPRITE_FILE_PATH)
    );
  }
}
