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
import { CommonModule } from '@angular/common';
import { ContentDialogDirective } from './dialog-content.directive';
import { Observable, Subject, Subscription, filter, map, withLatestFrom } from 'rxjs';
import { ButtonComponent, IconButtonComponent } from '../../../buttons';
import { DialogConfig, DialogType } from '../../data-access/models';
import { DialogRef } from '../../utility/utils/dialog-ref';
import { AnimationState } from '../../utility/utils/constants';

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

  contentComponentType: Type<TContentComponent>;
  animationState = AnimationState.Enter;

  #contentComponentRef: ComponentRef<TContentComponent>;
  #closeDialog$$ = new Subject();
  #subscription = new Subscription();

  get isEnableYesButton$(): Observable<boolean> {
    return this.dialogConfig.type$.pipe(
      filter(type => type === DialogType.YES_NO || type === DialogType.YES),
      map(() => true)
    )
  }

  get isEnableNoButton$(): Observable<boolean> {
    return this.dialogConfig.type$.pipe(
      filter(type => type === DialogType.YES_NO || type === DialogType.NO),
      map(() => true)
    )
  }

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
