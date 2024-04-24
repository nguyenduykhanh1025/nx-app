import {
  Directive,
  ElementRef,
  HostListener,
  inject,
  Input,
  OnDestroy,
  ViewContainerRef,
} from '@angular/core';
import {
  getMenuConfigDefault,
  OverlayState,
  POSITION_MAP,
  PositionMapKey,
} from '../../overlay/data-access';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { filter, merge, Subscription } from 'rxjs';
import { TemplatePortal } from '@angular/cdk/portal';
import { ESCAPE, hasModifierKey } from '@angular/cdk/keycodes';
import { MenuAbstractComponent } from '../utility';

@Directive({
  selector: '[uiMenu]',
  standalone: true,
})
export class MenuDirective implements OnDestroy {
  @Input() uiMenu: MenuAbstractComponent;
  @Input() uiMenuPosition: keyof typeof PositionMapKey = 'bottomLeft';

  readonly #el = inject(ElementRef);
  readonly #overlay = inject(Overlay);
  readonly #vcr = inject(ViewContainerRef);

  readonly #defaultMenuConfig = getMenuConfigDefault(this.#overlay);
  readonly #subscription = new Subscription();

  #overlayRef: OverlayRef;
  #menuState: OverlayState;

  ngOnDestroy(): void {
    this.#subscription.unsubscribe();
  }

  @HostListener('click')
  onClick() {
    if (this.#menuState === OverlayState.OPENED) {
      return;
    }
    this.#menuState = OverlayState.OPENED;

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
        ),
      this.uiMenu.uiItemClick
    ).subscribe(() => {
      this.#closeMenu();
    });

    this.#subscription.add(overlay$);
  }

  #closeMenu() {
    if (this.#menuState === OverlayState.CLOSED) {
      return;
    }

    this.#menuState = OverlayState.CLOSED;
    this.#overlayRef?.detach();
  }
}
