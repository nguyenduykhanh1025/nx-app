import { OverlayRef } from "@angular/cdk/overlay";
import { DialogPortalComponent } from "./dialog-portal.component";

export class DialogRef<TReturnType = any, TContentComponent = any> {
  componentInstance: DialogPortalComponent<TContentComponent> | undefined;

  constructor(private readonly overlayRef: OverlayRef) {
  }

  close(): void {
    this.overlayRef.dispose();
  }
}
