import {
  Directive,
  ElementRef,
  HostListener,
  inject,
  Input,
  OnInit,
  ViewContainerRef,
} from '@angular/core';
import { MenuComponent } from './menu.component';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { getMenuConfigDefault } from '../data-access/menu.helper';
import { TemplatePortal } from '@angular/cdk/portal';
import {
  POSITION_MAP,
  PositionMapKey,
} from '../data-access/connection-position-pair';

@Directive({
  selector: '[uiMenu]',
  standalone: true,
})
export class MenuDirective implements OnInit {
  @Input() uiMenu: MenuComponent;
  @Input() uiMenuPosition: keyof typeof PositionMapKey = 'rightTop';

  readonly #el = inject(ElementRef);
  readonly #overlay = inject(Overlay);
  readonly #vcr = inject(ViewContainerRef);

  readonly #defaultMenuConfig = getMenuConfigDefault(this.#overlay);

  ngOnInit(): void {
  }

  @HostListener('click')
  onClick() {
    const mergedConfig = this.#mergeConfig({});
    const overlayRef = this.#overlay.create(mergedConfig);
    const portal = this.#getPortal();
    overlayRef.attach(portal);
  }

  #mergeConfig(config?: Partial<OverlayConfig>): OverlayConfig {
    if (config === null) {
      return this.#defaultMenuConfig;
    }

    return {
      ...this.#defaultMenuConfig,
      ...config,
      positionStrategy: this.#overlay
        .position()
        .flexibleConnectedTo(this.#el)
        .withPositions([POSITION_MAP[this.uiMenuPosition]]),
    };
  }

  #getPortal(): TemplatePortal {
    return new TemplatePortal<any>(this.uiMenu.menuTemplate, this.#vcr);
  }
}
