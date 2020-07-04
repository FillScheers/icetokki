import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@icetokki/api-interfaces';
import { Store } from '@ngrx/store';
import { init } from './+state';

@Component({
  selector: 'icetokki-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  hello$ = this.http.get<Message>('/api/hello');
  constructor(private http: HttpClient, private store: Store) {}
  ngOnInit(): void {
    this.store.dispatch(init());
  }
}
