import { createSelector } from '@ngrx/store';
import { AppState } from './app.state';

const stateSelector = (state: { root: AppState }) => state.root;

export const serverTimeSelector = createSelector(
  stateSelector,
  (state) => state.lastServerPing as Date
);
