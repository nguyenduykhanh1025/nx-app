import { createFeature, createReducer, on } from '@ngrx/store';
import { AuthActions } from './auth.actions';
import { StoreLoadingStatus } from '@quiz-app/data-access/models';

export const AUTH_DATA_STORE_FEATURE_KEY = 'authDataStoreFeature';

export interface AuthState {
  token: string | undefined;
  isAuthenticated: boolean;
  loadingStatus: StoreLoadingStatus;
}

export const initialState: AuthState = {
  token: undefined,
  isAuthenticated: false,
  loadingStatus: 'NOT_RUN',
};

export const authDataStoreFeature = createFeature({
  name: AUTH_DATA_STORE_FEATURE_KEY,
  reducer: createReducer(
    initialState,
    on(
      AuthActions.loginSuccess,
      (state, action): AuthState => ({
        ...state,
        loadingStatus: 'FAILED',
        token: action.token,
        isAuthenticated: true,
      })
    ),
    on(
      AuthActions.loginFailed,
      (state): AuthState => ({
        ...state,
        isAuthenticated: false,
        loadingStatus: 'FAILED',
      })
    ),
    on(
      AuthActions.login,
      (state, action): AuthState => ({
        ...state,
        loadingStatus: 'RUNNING',
      })
    )
  ),
});
