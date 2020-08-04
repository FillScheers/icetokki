import { Component, OnInit } from '@angular/core';
import { ManageFacade, Playlist } from '@icetokki/playlist/domain';

@Component({
  selector: 'playlist-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss'],
})
export class ManageComponent implements OnInit {
  playlistList$ = this.manageFacade.PlaylistList$;

  songList$ = this.manageFacade.songList$;
  constructor(private manageFacade: ManageFacade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.manageFacade.load();
  }

  delete(playlist: Playlist): void {
    this.manageFacade.delete(playlist);
  }
}
