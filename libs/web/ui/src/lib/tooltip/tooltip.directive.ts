import {
  FlexibleConnectedPositionStrategy,
  Overlay,
  OverlayPositionBuilder,
  OverlayRef,
} from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import {
  ComponentRef,
  Directive,
  ElementRef,
  HostListener,
  inject,
  Injector,
  Input,
  OnInit,
} from '@angular/core';

import { TooltipConfig } from './data-access/models/tooltip.config';
import { TooltipPortalComponent } from './feature/tooltip-portal/tooltip-portal.component';

@Directive({
  selector: '[uiTooltip]',
  standalone: true,
})
export class TooltipDirective implements OnInit {
  @Input() tooltipText = '';
  @Input() toolTipConfig = new TooltipConfig();

  readonly #overlay = inject(Overlay);
  readonly #overlayPositionBuilder = inject(OverlayPositionBuilder);
  readonly #elementRef = inject(ElementRef);
  readonly #injector = inject(Injector);

  #overlayRef: OverlayRef;
  #tooltipRef: ComponentRef<TooltipPortalComponent>;
  #positionStrategy: FlexibleConnectedPositionStrategy;

  @HostListener('mouseenter')
  show(): void {
    const tooltipPortal = new ComponentPortal(TooltipPortalComponent, null, this.#createInjector());
    this.#tooltipRef = this.#overlayRef.attach(tooltipPortal);
    this.#tooltipRef.instance.text = this.tooltipText;
  }

  @HostListener('mouseleave')
  hide(): void {
    this.#overlayRef.detach();
  }

  ngOnInit(): void {
    this.#positionStrategy = this.#overlayPositionBuilder
      .flexibleConnectedTo(this.#elementRef)
      .withPositions([...this.toolTipConfig.positions]);

    this.#overlayRef = this.#overlay.create({
      ...this.toolTipConfig,
      positionStrategy: this.#positionStrategy,
      scrollStrategy: this.#overlay.scrollStrategies.close(),
    });
  }

  #createInjector(): Injector {
    return Injector.create({
      parent: this.#injector,
      providers: [
        { provide: FlexibleConnectedPositionStrategy, useValue: this.#positionStrategy },
      ],
    });
  }
}
