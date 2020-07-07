import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AppFacade } from './+state';

@Component({
  selector: 'icetokki-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  serverTime$ = this.app.serverTime$;

  constructor(private app: AppFacade) {}
  ngOnInit(): void {
    this.app.init();
  }
}
