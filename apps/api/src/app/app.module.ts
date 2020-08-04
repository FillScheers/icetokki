import { Module } from '@nestjs/common';

import { AppGateway } from './app.gateway';
import { AppService } from './app.service';
import { SongsModule } from './songs/songs.module';

@Module({
  imports: [SongsModule],
  controllers: [],
  providers: [AppService, AppGateway],
})
export class AppModule {}
