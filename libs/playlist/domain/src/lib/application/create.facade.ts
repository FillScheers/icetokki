import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Playlist } from '../entities/playlist';
import { PlaylistDataService } from '../infrastructure/playlist.data.service';


@Injectable({ providedIn: 'root' })
export class CreateFacade {

    private playlistListSubject = new BehaviorSubject<Playlist[]>([]); 
    playlistList$ = this.playlistListSubject.asObservable();

    constructor(private playlistDataService: PlaylistDataService) {
    }

    load(): void {
        this.playlistDataService.load().subscribe(
            playlistList => {
                this.playlistListSubject.next(playlistList)
            },
            err => {
                console.error('err', err);
            }
        );
    }

}
