import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({ providedIn: 'root' })
export class AppSocket extends Socket {
  constructor() {
    super({ url: `http://localhost:3333/songs`, options: {} });
  }
}
