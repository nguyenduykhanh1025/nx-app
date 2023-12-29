import { Component, Input, ViewEncapsulation, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { SvgIcon } from '../model/svg-icon';

const ICON_SPRITE_FILE_PATH = '/assets/sprite.svg';

@Component({
  selector: 'ui-icon',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule, MatIconModule],
  templateUrl: './icon.component.html',
})
export class IconComponent {
  @Input() svgIcon: SvgIcon = '';
  @Input() ariaLabel: string | undefined;
  @Input() dataRotate: boolean | undefined;

  get ariaHidden(): boolean {
    return !!this.ariaLabel;
  }

  private iconRegistry = inject(MatIconRegistry);
  private sanitizer = inject(DomSanitizer);

  constructor() {
    this.iconRegistry.addSvgIconSet(
      this.sanitizer.bypassSecurityTrustResourceUrl(ICON_SPRITE_FILE_PATH)
    );
  }
}
