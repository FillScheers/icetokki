import { Component, OnInit} from '@angular/core';
import { CreateFacade } from '@icetokki/playlist/domain';

@Component({
  selector: 'playlist-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
    
    
    playlistList$ = this.createFacade.playlistList$;


    constructor(private createFacade: CreateFacade) {
    }

    
    ngOnInit() {
        this.load();
    }

    load(): void {
        this.createFacade.load();
    }

}

