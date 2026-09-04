import { Test, TestingModule } from '@nestjs/testing';
import { MapLocationsController } from './map-locations.controller.js';
import { MapLocationsService } from './map-locations.service.js';

describe('MapLocationsController', () => {
  let controller: MapLocationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MapLocationsController],
      providers: [MapLocationsService],
    }).compile();

    controller = module.get<MapLocationsController>(MapLocationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
