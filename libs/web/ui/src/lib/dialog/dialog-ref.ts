import { OverlayRef } from '@angular/cdk/overlay';
import { DialogPortalComponent } from './dialog-portal.component';
import { Observable, Subject, filter, map, race, take } from 'rxjs';
import { ESCAPE } from '@angular/cdk/keycodes';

export class DialogRef<TReturnType = any, TContentComponent = any> {
  componentInstance: DialogPortalComponent<TContentComponent> | undefined;
  result: TReturnType | undefined;

  readonly #beforeClosed$ = new Subject<TReturnType | undefined>();
  readonly #afterClosed$ = new Subject<TReturnType | undefined>();

  constructor(private readonly overlayRef: OverlayRef) {
    race(
      overlayRef.backdropClick().pipe(map(() => undefined)),
      overlayRef.keydownEvents().pipe(
        filter((event) => event.keyCode === ESCAPE),
        map(() => undefined)
      )
    )
      .pipe(take(1))
      .subscribe(() => {
        this.close();
      });

    overlayRef.detachments().subscribe(() => {
      this.#afterClosed$.next(this.result);
    });
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
}
