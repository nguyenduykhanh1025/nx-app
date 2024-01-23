import { Overlay, OverlayConfig } from "@angular/cdk/overlay";
import { DialogConfig } from "./dialog.config"

export const getDialogConfigDefault = (overlay: Overlay) => {
  const dialogConfig = new DialogConfig();
  const overlayConfig = new OverlayConfig({
    disposeOnNavigation: true,
    hasBackdrop: true,
    panelClass: 'dialog-panel',
    backdropClass: 'dialog-backdrop',
    scrollStrategy: overlay.scrollStrategies.block(),
    positionStrategy: overlay.position().global().centerVertically().centerHorizontally()
  });
  dialogConfig.overlayConfig = overlayConfig;

  return dialogConfig;
}
