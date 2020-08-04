import { createAction, props } from '@ngrx/store';

export const init = createAction('[App] init');
export const connected = createAction(
  '[App] server connected',
  props<{ serverTime: Date }>()
);
