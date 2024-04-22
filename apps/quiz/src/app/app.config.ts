import { HttpClientModule } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';

import { appRoutes } from './app.routes';
import { StoreModule } from '@ngrx/store';
import {
  AUTH_DATA_STORE_FEATURE_KEY,
  authDataStoreFeature,
} from './features/auth/data-access/store/auth.reducers';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
    importProvidersFrom(
      HttpClientModule,
      StoreModule.forRoot({}),
      StoreModule.forFeature(AUTH_DATA_STORE_FEATURE_KEY, authDataStoreFeature.reducer)
    ),
  ],
};
