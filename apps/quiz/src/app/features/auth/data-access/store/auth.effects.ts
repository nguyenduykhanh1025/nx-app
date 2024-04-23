import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthActions } from './auth.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthEffects {
  readonly #actions$ = inject(Actions);
  readonly #authService = inject(AuthService);

  loginSomething$ = createEffect(() =>
    this.#actions$.pipe(
      ofType(AuthActions.login),
      switchMap(({ auth }) => {
        return this.#authService.logIn(auth).pipe(
          map((res) => {
            return AuthActions.loginSuccess({ token: res.token });
          }),
          catchError((error) => {
            return of(
              AuthActions.loginFailed({
                errorResponse: {
                  error: error,
                  message: 'Failed',
                },
              })
            );
          })
        );
      })
    )
  );
}
