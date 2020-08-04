import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { init, pong } from './app.actions';
import { map } from 'rxjs/operators';
import { AppSocket } from '../app.socket';
import { timer } from 'rxjs';

const message = `Welcome to tokkify!

I see, you like debugging.
Well you are in luck.
You can get the source code from:
https://gitlab.devvix.com/devvix/icetokki.
Have fun ^^. ❤

Fill Scheers. AKA FillBOT 🤖



`;

@Injectable()
export class AppEffects {
  onInit = createEffect(
    () =>
      this.actions$.pipe(
        ofType(init),
        map(() => {
          console.log(message);
        })
      ),
    { dispatch: false }
  );

  onPong = createEffect(() =>
    this.appSocket.fromEvent<number>('a-pong').pipe(
      map((x) => {
        return pong({ serverTime: new Date(x) });
      })
    )
  );

  constructor(private actions$: Actions, private appSocket: AppSocket) {
    timer(0, 20000).subscribe(() => {
      appSocket.emit('a-ping');
    });
  }
}
