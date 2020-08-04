import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Playlist } from '../entities/playlist';
import { PlaylistDataService } from '../infrastructure/playlist.data.service';
import { SongDataService } from '../infrastructure/song.data.service';
import { Song } from '../entities/song';

@Injectable({ providedIn: 'root' })
export class ManageFacade {
  constructor(
    private playlistDataService: PlaylistDataService,
    private songDataService: SongDataService
  ) {}
  private playlistListSubject = new BehaviorSubject<Playlist[]>([]);
  private songListSubject = new BehaviorSubject<Song[]>([]);
  PlaylistList$ = this.playlistListSubject.asObservable();
  songList$ = this.songListSubject.asObservable();
  delete(playlist: Playlist) {
    throw new Error('Method not implemented.');
  }

  load(): void {
    this.playlistDataService.load().subscribe(
      (playlistList) => {
        this.playlistListSubject.next(playlistList);
      },
      (err) => {
        console.error('err', err);
      }
    );
    this.songDataService.load().subscribe(
      (songList) => {
        this.songListSubject.next(songList);
      },
      (err) => {
        console.error('err', err);
      }
    );
  }
}
