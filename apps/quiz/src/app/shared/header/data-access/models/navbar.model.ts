import { Type } from '@angular/core';

export interface Navbar {
  title: string;
  // TODO: can I remove `any` here!
  template?: Type<any>;
  link?: string;
}
