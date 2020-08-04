import { Module, HttpModule } from '@nestjs/common';
import { SongsGateway } from './songs.gateway';
import { SongsService } from './songs.service';

@Module({
  imports: [HttpModule],
  providers: [SongsGateway, SongsService],
})
export class SongsModule {}
