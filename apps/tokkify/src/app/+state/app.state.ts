export interface AppState {
  initialized: boolean;
  lastServerPing?: Date;
}

export const initialState: AppState = { initialized: false };
