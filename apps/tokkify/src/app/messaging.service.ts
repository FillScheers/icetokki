import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { tap } from 'rxjs/operators';
import { randomBytes } from 'crypto';
import { firestore } from 'firebase/app';

const arrayUnion = firestore.FieldValue.arrayUnion;

@Injectable({ providedIn: 'root' })
export class MessagingService {
  messages = this.messaging.messages;
  constructor(private messaging: AngularFireMessaging) {}
  requestPermission() {
    this.messaging.requestToken.subscribe();
  }
}
