import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundException } from '@nestjs/common';
import { FloorsService } from './floors.service.js';
import { PrismaService } from '../../database/prisma.service.js';
import { createPrismaMock } from '../../database/prisma.service.mock.js';

describe('FloorsService', () => {
  let service: FloorsService;
  let prisma: ReturnType<typeof createPrismaMock<'floor'>>;

  beforeEach(async () => {
    prisma = createPrismaMock('floor');

    const module: TestingModule = await Test.createTestingModule({
      providers: [FloorsService, { provide: PrismaService, useValue: prisma }],
    }).compile();

    service = module.get<FloorsService>(FloorsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('when the record does not exist', () => {
    beforeEach(() => {
      prisma.floor.findUnique.mockResolvedValue(null);
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
      expect(prisma.floor.update).not.toHaveBeenCalled();
    });

    it('remove throws NotFoundException and leaves the record untouched', async () => {
      await expect(service.remove(1)).rejects.toBeInstanceOf(NotFoundException);
      expect(prisma.floor.delete).not.toHaveBeenCalled();
    });
  });
});
