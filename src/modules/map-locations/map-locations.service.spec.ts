import { Test, TestingModule } from '@nestjs/testing';
import { MapLocationsService } from './map-locations.service.js';
import { PrismaService } from '../../database/prisma.service.js';
import { createPrismaMock } from '../../database/prisma.service.mock.js';

describe('MapLocationsService', () => {
  let service: MapLocationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MapLocationsService,
        { provide: PrismaService, useValue: createPrismaMock('mapLocation') },
      ],
    }).compile();

    service = module.get<MapLocationsService>(MapLocationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
