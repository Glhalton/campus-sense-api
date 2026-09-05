import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundException } from '@nestjs/common';
import { CampusService } from './campus.service.js';
import { PrismaService } from '../../database/prisma.service.js';
import { createPrismaMock } from '../../database/prisma.service.mock.js';

describe('CampusService', () => {
  let service: CampusService;
  let prisma: ReturnType<typeof createPrismaMock<'campus'>>;

  beforeEach(async () => {
    prisma = createPrismaMock('campus');

    const module: TestingModule = await Test.createTestingModule({
      providers: [CampusService, { provide: PrismaService, useValue: prisma }],
    }).compile();

    service = module.get<CampusService>(CampusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('when the record does not exist', () => {
    beforeEach(() => {
      prisma.campus.findUnique.mockResolvedValue(null);
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
      expect(prisma.campus.update).not.toHaveBeenCalled();
    });

    it('remove throws NotFoundException and leaves the record untouched', async () => {
      await expect(service.remove(1)).rejects.toBeInstanceOf(NotFoundException);
      expect(prisma.campus.delete).not.toHaveBeenCalled();
    });
  });
});
