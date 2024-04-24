import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AppActions } from './app.actions';
import { of, switchMap } from 'rxjs';
import { AuthActions } from '@quiz-app/features/auth/data-access/store';

@Injectable()
export class AppEffects {
  readonly #actions$ = inject(Actions);

  initToken$ = createEffect(
    () =>
      this.#actions$.pipe(
        ofType(AppActions.init),
        switchMap(() => {
          return of(AuthActions.initAuth());
        })
      ),
  );
}
