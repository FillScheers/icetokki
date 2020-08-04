import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Song } from '../entities/song';
// tslint:disable-next-line: nx-enforce-module-boundaries
import { Response } from '@icetokki/api-interfaces';
import { Socket } from 'ngx-socket-io';
@Injectable({ providedIn: 'root' })
export class SongDataService {
  constructor(private socket: Socket) {}

  load(): Observable<Song[]> {
    this.socket.emit('getSongList', { filter: '' });
    return this.socket.fromEvent<Response>('songsResponse').pipe(
      take(1),
      map((v) =>
        v.results.map(
          (x) =>
            ({
              artists: x.artists.map((y) => y.name),
              artistsTitle: x.artistsTitle,
              bpm: x.bpm,
              creatorFriendly: x.creatorFriendly,
              debutDate: x.debutDate,
              downloadable: x.downloadable,
              duration: x.duration,
              explicit: x.explicit,
              genrePrimary: x.genrePrimary,
              genreSecondary: x.genreSecondary,
              id: x.id,
              inEarlyAccess: x.inEarlyAccess,
              isrc: x.isrc,
              release: x.release.id,
              streamable: x.streamable,
              tags: x.tags,
              title: x.title,
            } as Song)
        )
      )
    );
  }
}
