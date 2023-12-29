import { CommonModule } from '@angular/common';
import {
  MatIconModule, MatIconRegistry,
} from '@angular/material/icon';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { IconComponent } from '../../../../../../libs/web/ui/src/lib/icon/icon.component';

@Component({
  selector: 'quiz-main-layout',
  standalone: true,
  imports: [
    CommonModule,
    // MatIconModule,
    IconComponent
  ],
  templateUrl: './main-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLayoutComponent {
  private iconRegistry = inject(MatIconRegistry);
  private sanitizer = inject(DomSanitizer)

  constructor() {
    // this.iconRegistry.addSvgIconSet(this.sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/icon-sprite.svg'))
  }
}
