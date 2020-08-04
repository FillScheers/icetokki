import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Playlist } from '../entities/playlist';

@Injectable({ providedIn: 'root' })
export class PlaylistDataService {
  constructor(private http: HttpClient) {}

  load(): Observable<Playlist[]> {
    // Uncomment if needed
    /*
        const url = '...';
        const params = new HttpParams().set('param', 'value');
        const headers = new HttpHeaders().set('Accept', 'application/json');
        return this.http.get<Playlist[]>(url, {params, headers});
        */

    return of([
      {
        id: '1',
        title: 'Lorem ipsum',
        songs: ['8e31d706-01b1-4b87-978c-5994da27f3eb'],
      },
      { id: '2', title: 'At vero eos', songs: [''] },
      {
        id: '3',
        title: 'Duis autem',
        songs: ['8e31d706-01b1-4b87-978c-5994da27f3eb'],
      },
    ]);
  }
}
