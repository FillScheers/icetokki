import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { init } from './app.actions';
import { map } from 'rxjs/operators';

@Injectable()
export class AppEffects {
  onInit = createEffect(
    () =>
      this.actions$.pipe(
        ofType(init),
        map(() => {
          console.log(
            `Welcome to tokkify!

I see, you like debugging.
Well you are in luck.
You can get the source code from:
https://gitlab.devvix.com/fillscheers/icetokki.
Have fun ^^. ❤

Fill Scheers. AKA FillBOT 🤖



`
          );
        })
      ),
    { dispatch: false }
  );
  constructor(private actions$: Actions) {}
}
