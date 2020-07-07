import { createAction, props } from '@ngrx/store';

export const init = createAction('[App] init');
export const pong = createAction(
  '[App] server pong',
  props<{ serverTime: Date }>()
);
