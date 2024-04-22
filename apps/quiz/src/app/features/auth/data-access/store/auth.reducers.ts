import { createFeature, createReducer, on } from "@ngrx/store";
import { AuthActions } from "./auth.actions";

export const AUTH_DATA_STORE_FEATURE_KEY = 'authDataStoreFeature';

export interface AuthState {
  token: string | undefined;
}

export const initialState: AuthState = {
  token: undefined
};

export const authDataStoreFeature = createFeature(
  {
    name: AUTH_DATA_STORE_FEATURE_KEY ,
    reducer: createReducer(
      initialState,
      on(AuthActions.loginSuccess, (state, action) => ({
        ...state,
        token: action.token
      }))
    )
  }
);
