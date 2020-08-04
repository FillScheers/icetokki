import {
  SubscribeMessage,
  WebSocketGateway,
  WsResponse,
} from '@nestjs/websockets';
import { GetSongRequest } from '@icetokki/api-interfaces';
import { Socket } from 'socket.io';
import { Response as MonstercatResponse } from '@icetokki/api-interfaces';
import { SongsService } from './songs.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@WebSocketGateway()
export class SongsGateway {
  @SubscribeMessage('getSongList')
  handleMessage(
    client: Socket,
    payload: GetSongRequest
  ): Observable<WsResponse<MonstercatResponse>> {
    return this.service
      .getSongs(payload.filter)
      .pipe(map((v) => ({ event: 'songsResponse', data: v })));
  }

  /**
   *
   */
  constructor(private service: SongsService) {}
}
