import { OverlayRef } from '@angular/cdk/overlay';
import { Observable, Subject, filter, map, race, switchMap, take } from 'rxjs';
import { ESCAPE } from '@angular/cdk/keycodes';
import { DialogConfig } from '../models/dialog.config';
import { DialogPortalComponent } from '../dialog-portal/dialog-portal.component';

export class DialogRef<TReturnType = any, TContentComponent = any> {
  componentInstance: DialogPortalComponent<TContentComponent> | undefined;
  result: TReturnType | undefined;

  readonly #beforeClosed$ = new Subject<TReturnType | undefined>();
  readonly #afterClosed$ = new Subject<TReturnType | undefined>();

  constructor(
    private readonly overlayRef: OverlayRef,
    private readonly config: DialogConfig
  ) {
    this.#handleCloseEvent();
    this.#handleDetachmentsEvent();
  }

  get beforeClosed(): Observable<TReturnType | undefined> {
    return this.#beforeClosed$.asObservable();
  }

  get afterClosed(): Observable<TReturnType | undefined> {
    return this.#afterClosed$.asObservable();
  }

  close(data?: TReturnType): void {
    this.result = data;
    this.#beforeClosed$.next(data);
    this.overlayRef.dispose();
  }

  #handleCloseEvent(): void {
    this.config.disableClose$
      .pipe(
        filter((isDisabledClose) => !isDisabledClose),
        switchMap(() =>
          race(
            this.overlayRef.backdropClick().pipe(map(() => undefined)),
            this.overlayRef.keydownEvents().pipe(
              filter((event) => event.keyCode === ESCAPE),
              map(() => undefined)
            )
          ).pipe(take(1))
        )
      )
      .subscribe(() => {
        this.close();
      });
  }

  #handleDetachmentsEvent(): void {
    this.overlayRef.detachments().subscribe(() => {
      this.#afterClosed$.next(this.result);
    });
  }
}
