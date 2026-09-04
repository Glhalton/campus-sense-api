import { Test, TestingModule } from '@nestjs/testing';
import { BuildingsController } from './buildings.controller.js';
import { BuildingsService } from './buildings.service.js';

describe('BuildingsController', () => {
  let controller: BuildingsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BuildingsController],
      providers: [BuildingsService],
    }).compile();

    controller = module.get<BuildingsController>(BuildingsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
