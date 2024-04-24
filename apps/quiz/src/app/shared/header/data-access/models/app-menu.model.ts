import { TemplateRef, Type } from '@angular/core';

export interface AppMenu {
  title: string;
  template?: Type<any>
  link?: string;
}
