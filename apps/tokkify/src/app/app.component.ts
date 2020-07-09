import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AppFacade } from './+state';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { MessagingService } from './messaging.service';
import { Observable } from 'rxjs';
import { AngularFireAnalytics } from '@angular/fire/analytics';

@Component({
  selector: 'icetokki-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  serverTime$ = this.app.serverTime$;
  message$: Observable<any>;
  constructor(private app: AppFacade, private messaging: MessagingService) {}
  ngOnInit(): void {
    this.app.init();
    this.messaging.requestPermission();
    this.message$ = this.messaging.messages;
    this.message$.subscribe((message) => {
      console.log(message);
    });
  }
}
