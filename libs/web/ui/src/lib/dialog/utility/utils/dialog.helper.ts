import { Overlay, OverlayConfig } from "@angular/cdk/overlay";
import { DialogConfig } from "../../data-access/models";


export const getDialogConfigDefault = (overlay: Overlay): DialogConfig => {
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
