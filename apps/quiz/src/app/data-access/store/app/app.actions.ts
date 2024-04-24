import { createAction } from '@ngrx/store';

export const source = 'QUIZ|APP';

export const AppActions = {
  init: createAction(`[${source}] init`),
};
