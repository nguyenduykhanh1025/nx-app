import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthActions } from './auth.actions';
import { catchError, EMPTY, map, of, switchMap, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { LocalStorageService } from '@quiz-app/data-access/services/local-storage.service';
import { LOCAL_STORAGE_USER_TOKEN } from '@quiz-app/data-access/constants';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  readonly #actions$ = inject(Actions);
  readonly #authService = inject(AuthService);
  readonly #localStorageService = inject(LocalStorageService);
  readonly #router = inject(Router);

  login$ = createEffect(() =>
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

  loginSuccess$ = createEffect(
    () =>
      this.#actions$.pipe(
        ofType(AuthActions.loginSuccess),
        tap(({ token }) => {
          this.#localStorageService.setItem(LOCAL_STORAGE_USER_TOKEN, token);
          this.#router.navigate(['/home']);
        })
      ),
    { dispatch: false }
  );

  initAuth$ = createEffect(() =>
    this.#actions$.pipe(
      ofType(AuthActions.initAuth),
      switchMap(() => {
        const token = this.#localStorageService.getItem(
          LOCAL_STORAGE_USER_TOKEN
        );
        if (!token) {
          return EMPTY;
        }

        return of(AuthActions.initAuthSuccess({ token }));
      })
    )
  );
}
