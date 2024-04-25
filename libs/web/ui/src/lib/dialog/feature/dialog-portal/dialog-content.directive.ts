import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[uiContentDialog]',
  standalone: true
})
export class ContentDialogDirective {

  constructor(public viewContainerRef: ViewContainerRef) { // contentInsertionPoint
  }

}
