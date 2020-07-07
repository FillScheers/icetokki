import { Store, select } from '@ngrx/store';
import { AppState } from './app.state';
import { init } from './app.actions';
import { Injectable } from '@angular/core';
import { serverTimeSelector } from './app.selectors';

@Injectable({ providedIn: 'root' })
export class AppFacade {
  serverTime$ = this.store.pipe(select(serverTimeSelector));
  init() {
    this.store.dispatch(init());
  }

  constructor(private store: Store) {}
}
