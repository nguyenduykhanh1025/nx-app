import { HttpClientModule } from '@angular/common/http';
import {
  APP_INITIALIZER,
  ApplicationConfig,
  importProvidersFrom,
} from '@angular/core';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';

import { appRoutes } from './app.routes';
import { Store, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  AUTH_DATA_STORE_FEATURE_KEY,
  authDataStoreFeature,
  AuthEffects,
} from './features/auth/data-access/store';
import { AppEffects } from './data-access/store/app/app.effects';
import { AppActions } from './data-access/store/app/app.actions';

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
      EffectsModule.forFeature([AuthEffects, AppEffects])
    ),
    {
      provide: APP_INITIALIZER,
      useFactory: (store: Store) => () => {
        store.dispatch(AppActions.init());
      },
      multi: true,
      deps: [Store],
    },
  ],
};
