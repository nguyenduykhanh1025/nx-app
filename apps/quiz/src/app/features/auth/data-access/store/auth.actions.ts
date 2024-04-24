import { createAction, props } from '@ngrx/store';
import { Auth, ErrorResponse } from '@quiz-app/data-access/models';

export const source = 'QUIZ|AUTH';

export const AuthActions = {
  loginSuccess: createAction(
    `[${source}] login successfully`,
    props<{ token: string }>()
  ),
  loginFailed: createAction(
    `[${source}] login Failed`,
    props<{ errorResponse: ErrorResponse }>()
  ),
  login: createAction(`[${source}] start to login`, props<{ auth: Auth }>()),
  initAuth: createAction(`[${source}] init auth`),
  initAuthSuccess: createAction(`[${source}] init auth successfully`, props<{ token: string }>()),
};
