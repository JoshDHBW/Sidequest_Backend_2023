import { Test, TestingModule } from '@nestjs/testing';
import { SidequestsService } from './sidequests.service';

describe('SidequestsService', () => {
  let service: SidequestsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SidequestsService],
    }).compile();

    service = module.get<SidequestsService>(SidequestsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
