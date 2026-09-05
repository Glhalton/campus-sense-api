import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundException } from '@nestjs/common';
import { MapLocationsService } from './map-locations.service.js';
import { PrismaService } from '../../database/prisma.service.js';
import { createPrismaMock } from '../../database/prisma.service.mock.js';

describe('MapLocationsService', () => {
  let service: MapLocationsService;
  let prisma: ReturnType<typeof createPrismaMock<'mapLocation'>>;

  beforeEach(async () => {
    prisma = createPrismaMock('mapLocation');

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MapLocationsService,
        { provide: PrismaService, useValue: prisma },
      ],
    }).compile();

    service = module.get<MapLocationsService>(MapLocationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('when the record does not exist', () => {
    beforeEach(() => {
      prisma.mapLocation.findUnique.mockResolvedValue(null);
    });

    it('findOne throws NotFoundException', async () => {
      await expect(service.findOne(1)).rejects.toBeInstanceOf(
        NotFoundException,
      );
    });

    it('update throws NotFoundException and leaves the record untouched', async () => {
      await expect(service.update(1, {})).rejects.toBeInstanceOf(
        NotFoundException,
      );
      expect(prisma.mapLocation.update).not.toHaveBeenCalled();
    });

    it('remove throws NotFoundException and leaves the record untouched', async () => {
      await expect(service.remove(1)).rejects.toBeInstanceOf(NotFoundException);
      expect(prisma.mapLocation.delete).not.toHaveBeenCalled();
    });
  });
});
