import { Test, TestingModule } from '@nestjs/testing';
import { SongsGateway } from './songs.gateway';

describe('SongsGateway', () => {
  let gateway: SongsGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SongsGateway],
    }).compile();

    gateway = module.get<SongsGateway>(SongsGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
