import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { inject,Injectable, Injector, Type } from '@angular/core';

import { DialogPortalComponent } from './dialog-portal/dialog-portal.component';
import { DialogConfig } from './models/dialog.config';
import { getDialogConfigDefault } from './utils/dialog.helper';
import { DialogRef } from './utils/dialog-ref';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  readonly #overlay = inject(Overlay);
  readonly #defaultDialogConfig = getDialogConfigDefault(this.#overlay);
  readonly #injector = inject(Injector);

  // TODO: try to remove 'any' type
  // reference: https://johnbwoodruff.com/posts/angular-cdk-dialog/
  open<TReturnType = any, TContentComponent = any>(
    component: Type<TContentComponent>,
    config?: Partial<DialogConfig>
  ): DialogRef<TReturnType, TContentComponent> {
    const mergedConfig = this.#mergeConfig(config);

    // attach DialogPortalComponent to Portal
    const overlayRef = this.#overlay.create(mergedConfig.overlayConfig);
    const dialogRef = new DialogRef<TReturnType, TContentComponent>(
      overlayRef,
      mergedConfig
    );
    const portal = new ComponentPortal(
      DialogPortalComponent,
      null,
      this.#createInjector(dialogRef, mergedConfig)
    );

    // attach Portal to the overlay PortalHost
    const containerRef = overlayRef.attach(portal);
    containerRef.instance.contentComponentType = component;

    dialogRef.componentInstance = containerRef.instance;

    return dialogRef;
  }

  #createInjector(dialogRef: DialogRef, dialogConfig: DialogConfig): Injector {
    return Injector.create({
      parent: this.#injector,
      providers: [
        { provide: DialogRef, useValue: dialogRef },
        { provide: DialogConfig, useValue: dialogConfig },
      ],
    });
  }

  #mergeConfig(config?: Partial<DialogConfig>): DialogConfig {
    if (config === null) {
      return this.#defaultDialogConfig;
    }

    return {
      ...this.#defaultDialogConfig,
      ...config,
    };
  }
}
