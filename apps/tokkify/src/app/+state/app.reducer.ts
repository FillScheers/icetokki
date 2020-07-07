import { createReducer, on } from '@ngrx/store';
import { initialState } from './app.state';
import { init, pong } from './app.actions';

export const reducer = createReducer(
  initialState,
  on(init, (state, action) => ({ ...state, initialized: true })),
  on(pong, (state, action) => ({ ...state, lastServerPing: action.serverTime }))
);
