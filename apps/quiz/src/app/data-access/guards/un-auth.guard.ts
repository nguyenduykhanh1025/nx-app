import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '@quiz-app/features/auth/data-access/services';
import { map } from 'rxjs';

export const unAuthGuard: CanActivateFn = () => {
  const router = inject(Router);

  return inject(AuthService)
    .authenticated()
    .pipe(
      map((isAuthenticated) => {
        return isAuthenticated ? router.createUrlTree(['/home']) : true;
      })
    );
};
