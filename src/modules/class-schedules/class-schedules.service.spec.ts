import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundException } from '@nestjs/common';
import { ClassSchedulesService } from './class-schedules.service.js';
import { PrismaService } from '../../database/prisma.service.js';
import { createPrismaMock } from '../../database/prisma.service.mock.js';

describe('ClassSchedulesService', () => {
  let service: ClassSchedulesService;
  let prisma: ReturnType<typeof createPrismaMock<'classSchedule'>>;

  beforeEach(async () => {
    prisma = createPrismaMock('classSchedule');

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ClassSchedulesService,
        { provide: PrismaService, useValue: prisma },
      ],
    }).compile();

    service = module.get<ClassSchedulesService>(ClassSchedulesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('when the record does not exist', () => {
    beforeEach(() => {
      prisma.classSchedule.findUnique.mockResolvedValue(null);
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
      expect(prisma.classSchedule.update).not.toHaveBeenCalled();
    });

    it('remove throws NotFoundException and leaves the record untouched', async () => {
      await expect(service.remove(1)).rejects.toBeInstanceOf(NotFoundException);
      expect(prisma.classSchedule.delete).not.toHaveBeenCalled();
    });
  });
});
