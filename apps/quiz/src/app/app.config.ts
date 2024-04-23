import { HttpClientModule } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';

import { appRoutes } from './app.routes';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  AUTH_DATA_STORE_FEATURE_KEY,
  authDataStoreFeature,
  AuthEffects,
} from './features/auth/data-access/store';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
    importProvidersFrom(
      HttpClientModule,
      StoreModule.forRoot({}),
      EffectsModule.forRoot([]),
      StoreModule.forFeature(
        AUTH_DATA_STORE_FEATURE_KEY,
        authDataStoreFeature.reducer
      ),
      EffectsModule.forFeature([AuthEffects])
    ),
  ],
};
