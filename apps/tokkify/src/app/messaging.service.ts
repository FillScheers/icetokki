import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { AngularFirestore } from '@angular/fire/firestore';
import { switchMap, tap } from 'rxjs/operators';
import { from } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MessagingService {
  messages = this.messaging.messages;
  constructor(
    private messaging: AngularFireMessaging,
    private firestore: AngularFirestore
  ) {}
  requestPermission() {
    this.messaging.requestToken
      .pipe(
        tap((token) => {
          console.log(token);
        }),
        switchMap((token) =>
          from(
            this.firestore
              .collection('Users')
              .doc('test')
              .set({ messagingKey: token }, { merge: true })
          )
        )
      )
      .subscribe();
  }
}
