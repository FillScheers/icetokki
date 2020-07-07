import {
  WebSocketGateway,
  SubscribeMessage,
  WsResponse,
} from '@nestjs/websockets';

import { AppService } from './app.service';

@WebSocketGateway()
export class AppGateway {
  constructor(private readonly appService: AppService) {}

  @SubscribeMessage('a-ping')
  getData(): WsResponse<number> {
    return { event: 'a-pong', data: Date.now() };
  }
}
