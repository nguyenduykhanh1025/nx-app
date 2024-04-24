import { Component, EventEmitter, Output, TemplateRef, ViewChild } from '@angular/core';

@Component({ template: '' })
export abstract class MenuAbstractComponent {
  @ViewChild(TemplateRef, { static: true }) menuTemplate: TemplateRef<any>;
  @Output() uiItemClick = new EventEmitter<any>();
}
