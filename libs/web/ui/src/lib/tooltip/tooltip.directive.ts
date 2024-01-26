import {
  FlexibleConnectedPositionStrategy,
  Overlay,
  OverlayPositionBuilder,
  OverlayRef,
} from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import {
  ChangeDetectorRef,
  ComponentRef,
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  inject,
} from '@angular/core';
import { TooltipPortalComponent } from './tooltip-portal/tooltip-portal.component';
import { TooltipConfig } from './models/tooltip.config';
import TooltipService from './services/tooltip.service';

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
  readonly #cdr = inject(ChangeDetectorRef);

  #overlayRef: OverlayRef;
  #tooltipRef: ComponentRef<TooltipPortalComponent>;
  #positionStrategy: FlexibleConnectedPositionStrategy;

  @HostListener('mouseenter')
  show(): void {
    const tooltipPortal = new ComponentPortal(TooltipPortalComponent);
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
    // positionStrategy.positionChanges.subscribe((pos) => console.log(pos));

    this.#overlayRef = this.#overlay.create({
      ...this.toolTipConfig,
      positionStrategy: this.#positionStrategy,
      scrollStrategy: this.#overlay.scrollStrategies.close(),
    });

    // this.#positionStrategy.positionChanges.subscribe((pos) => {
    //   console.log(pos);
    //   console.log('TooltipService.getTooltipIconDirection(pos.connectionPair)',TooltipService.getTooltipIconDirection(pos.connectionPair));


    //   this.#tooltipRef = this.#overlayRef.detach();
    //   this.#tooltipRef = this.#overlayRef.attach(tooltipPortal);
    //   this.#tooltipRef.instance.text = this.tooltipText;
    //   this.#tooltipRef.instance.direction = TooltipService.getTooltipIconDirection(pos.connectionPair)
    //   this.#tooltipRef.changeDetectorRef.detectChanges();
    // })
  }
}
