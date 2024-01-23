import { AfterViewInit, ChangeDetectionStrategy, Component, ComponentRef, OnDestroy, Type, ViewChild, ViewContainerRef, inject } from '@angular/core';
import { AnimationState } from './constants';
import { CommonModule } from '@angular/common';
import { DialogRef } from './dialog-ref';
import { ContentDialogDirective } from './dialog-content.directive';

@Component({
  selector: 'ui-dialog-container',
  templateUrl: './dialog-portal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, ContentDialogDirective],
  standalone: true,
})
export class DialogPortalComponent<TContentComponent = any> implements AfterViewInit, OnDestroy{
  @ViewChild(ContentDialogDirective) contentDialogDirective: ContentDialogDirective;

  readonly #dialogRef = inject(DialogRef)

  contentComponentType: Type<TContentComponent>;
  animationState = AnimationState.Enter;

  #contentComponentRef: ComponentRef<TContentComponent>;

  ngAfterViewInit(): void {
    this.#loadContentIntoDialog();
  }

  ngOnDestroy(): void {
    this.#contentComponentRef.destroy();
  }

  onCloseClick() {
    this.#closeDialog();
  }

  #loadContentIntoDialog() {
    if(!this.contentComponentType) {
      return;
    }

    this.#contentComponentRef = this.contentDialogDirective.viewContainerRef.createComponent(this.contentComponentType)
  }

  #closeDialog() {
    this.#dialogRef.close()
  }
}
