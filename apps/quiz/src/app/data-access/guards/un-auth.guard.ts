import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

export const unAuthGuard: CanActivateFn = () => {
  return inject(AuthService).authenticated() ? inject(Router).createUrlTree(['/home']) : true;
};
