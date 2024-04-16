import {
  Directive,
  ElementRef,
  HostListener,
  inject,
  Input,
  OnDestroy,
  OnInit,
  ViewContainerRef,
} from '@angular/core';
import { MenuComponent } from './menu.component';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { getMenuConfigDefault } from '../data-access/menu.helper';
import { TemplatePortal } from '@angular/cdk/portal';
import {
  POSITION_MAP,
  PositionMapKey,
} from '../data-access/connection-position-pair';
import { filter, merge, Subscription } from 'rxjs';
import { ESCAPE, hasModifierKey } from '@angular/cdk/keycodes';
import { MenuState } from '../data-access/menu-state';

@Directive({
  selector: '[uiMenu]',
  standalone: true,
})
export class MenuDirective implements OnInit, OnDestroy {
  @Input() uiMenu: MenuComponent;
  @Input() uiMenuPosition: keyof typeof PositionMapKey = 'rightTop';

  readonly #el = inject(ElementRef);
  readonly #overlay = inject(Overlay);
  readonly #vcr = inject(ViewContainerRef);

  readonly #defaultMenuConfig = getMenuConfigDefault(this.#overlay);
  readonly #subscription = new Subscription();

  #overlayRef: OverlayRef;
  #menuState: MenuState;

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.#subscription.unsubscribe();
  }

  @HostListener('click')
  onClick() {
    if (this.#menuState === MenuState.OPENED) {
      return;
    }
    this.#menuState = MenuState.OPENED;

    const mergedConfig = this.#mergeConfig({});
    this.#overlayRef = this.#overlay.create(mergedConfig);
    const portal = this.#getPortal();
    this.#overlayRef.attach(portal);
    this.#handleCloseMenuEvent();
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
      scrollStrategy: this.#overlay.scrollStrategies.reposition(),
    };
  }

  #getPortal(): TemplatePortal {
    return new TemplatePortal<any>(this.uiMenu.menuTemplate, this.#vcr);
  }

  #handleCloseMenuEvent() {
    const overlay$ = merge(
      this.#overlayRef.backdropClick(),
      this.#overlayRef.detachments(),
      this.#overlayRef
        .keydownEvents()
        .pipe(
          filter((event) => event.keyCode === ESCAPE && !hasModifierKey(event))
        )
    ).subscribe(() => {
      this.#closeMenu();
    });

    this.#subscription.add(overlay$);
  }

  #closeMenu() {
    if (this.#menuState === MenuState.CLOSED) {
      return;
    }

    this.#menuState = MenuState.CLOSED;
    this.#overlayRef?.detach();
  }
}
