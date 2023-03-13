import { Test, TestingModule } from '@nestjs/testing';
import { SidequestsController } from './sidequests.controller';
import { SidequestsService } from './sidequests.service';

describe('SidequestsController', () => {
  let controller: SidequestsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SidequestsController],
      providers: [SidequestsService],
    }).compile();

    controller = module.get<SidequestsController>(SidequestsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
