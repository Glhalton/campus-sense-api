import { Test, TestingModule } from '@nestjs/testing';
import { MapLocationsController } from './map-locations.controller.js';
import { MapLocationsService } from './map-locations.service.js';
import { PrismaService } from '../../database/prisma.service.js';
import { createPrismaMock } from '../../database/prisma.service.mock.js';

describe('MapLocationsController', () => {
  let controller: MapLocationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MapLocationsController],
      providers: [
        MapLocationsService,
        { provide: PrismaService, useValue: createPrismaMock('mapLocation') },
      ],
    }).compile();

    controller = module.get<MapLocationsController>(MapLocationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
