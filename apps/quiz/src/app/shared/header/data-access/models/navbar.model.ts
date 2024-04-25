import { Type } from '@angular/core';
import { SvgIcon } from '@nx-app/web/libs';

export interface Navbar {
  title: string;
  // TODO: can I remove `any` here!
  template?: Type<any>;
  link?: string;
  svgIcon: SvgIcon | undefined;
}
