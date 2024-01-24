import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ComponentRef,
  OnDestroy,
  OnInit,
  Type,
  ViewChild,
  inject,
} from '@angular/core';
import { AnimationState } from './constants';
import { CommonModule } from '@angular/common';
import { DialogRef } from './dialog-ref';
import { ContentDialogDirective } from './dialog-content.directive';
import { ButtonComponent } from '../button/button.component';
import { ButtonType } from '../models/button-type';
import { IconButtonComponent } from '../icon-button/icon-button.component';
import { ButtonSize } from '../models/button-size';
import { DialogConfig } from './dialog.config';
import { Subject, Subscription, filter, withLatestFrom } from 'rxjs';

@Component({
  selector: 'ui-dialog-container',
  templateUrl: './dialog-portal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    ContentDialogDirective,
    ButtonComponent,
    IconButtonComponent,
  ],
  standalone: true,
})
export class DialogPortalComponent<TContentComponent = any>
  implements AfterViewInit, OnDestroy, OnInit
{
  @ViewChild(ContentDialogDirective)
  contentDialogDirective: ContentDialogDirective;

  readonly #dialogRef = inject(DialogRef);
  readonly dialogConfig = inject(DialogConfig);

  readonly ButtonType = ButtonType;
  readonly ButtonSize = ButtonSize;

  contentComponentType: Type<TContentComponent>;
  animationState = AnimationState.Enter;

  #contentComponentRef: ComponentRef<TContentComponent>;
  #closeDialog$$ = new Subject();
  #subscription = new Subscription();

  ngOnInit(): void {
    this.#handleCloseEvent();
  }

  ngAfterViewInit(): void {
    this.#loadContentIntoDialog();
  }

  ngOnDestroy(): void {
    this.#subscription.unsubscribe();
    this.#contentComponentRef.destroy();
  }

  onCloseClick() {
    this.#closeDialog();
  }

  #loadContentIntoDialog() {
    if (!this.contentComponentType) {
      return;
    }

    this.#contentComponentRef =
      this.contentDialogDirective.viewContainerRef.createComponent(
        this.contentComponentType
      );
  }

  #closeDialog() {
    this.#closeDialog$$.next(undefined);
  }

  #handleCloseEvent() {
    this.#subscription.add(
      this.#closeDialog$$
      .pipe(
        withLatestFrom(this.dialogConfig.disableClose$),
        filter(([, isDisabledClose]) => !isDisabledClose)
      )
      .subscribe(() => {
        this.#dialogRef.close();
      })
    )
  }
}
