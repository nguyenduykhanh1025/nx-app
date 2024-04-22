import { createAction, props } from "@ngrx/store";
import { AUTH_DATA_STORE_FEATURE_KEY } from "./auth.reducers";

export const source = 'QUIZ|AUTH';

export const AuthActions = {
  loginSuccess: createAction(`[${source}] login successfully`, props<{ token: string } >()),
}
