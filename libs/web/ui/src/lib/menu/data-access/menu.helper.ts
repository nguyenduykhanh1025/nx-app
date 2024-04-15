import { Overlay, OverlayConfig } from '@angular/cdk/overlay';

export const getMenuConfigDefault = (overlay: Overlay): OverlayConfig => {
  const overlayConfig = new OverlayConfig({
    minWidth: '200px',
    backdropClass: 'ui-menu-backdrop',
    panelClass: 'ui-menu-panel',
    scrollStrategy: overlay.scrollStrategies.reposition(),
    hasBackdrop: true,
  });

  return overlayConfig;
};
