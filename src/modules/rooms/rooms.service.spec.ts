import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundException } from '@nestjs/common';
import { RoomsService } from './rooms.service.js';
import { PrismaService } from '../../database/prisma.service.js';
import { createPrismaMock } from '../../database/prisma.service.mock.js';

describe('RoomsService', () => {
  let service: RoomsService;
  let prisma: ReturnType<typeof createPrismaMock<'room'>>;

  beforeEach(async () => {
    prisma = createPrismaMock('room');

    const module: TestingModule = await Test.createTestingModule({
      providers: [RoomsService, { provide: PrismaService, useValue: prisma }],
    }).compile();

    service = module.get<RoomsService>(RoomsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('when the record does not exist', () => {
    beforeEach(() => {
      prisma.room.findUnique.mockResolvedValue(null);
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
      expect(prisma.room.update).not.toHaveBeenCalled();
    });

    it('remove throws NotFoundException and leaves the record untouched', async () => {
      await expect(service.remove(1)).rejects.toBeInstanceOf(NotFoundException);
      expect(prisma.room.delete).not.toHaveBeenCalled();
    });
  });
});
