import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundException } from '@nestjs/common';
import { ClassGroupsService } from './class-groups.service.js';
import { PrismaService } from '../../database/prisma.service.js';
import { createPrismaMock } from '../../database/prisma.service.mock.js';

describe('ClassGroupsService', () => {
  let service: ClassGroupsService;
  let prisma: ReturnType<typeof createPrismaMock<'classGroup'>>;

  beforeEach(async () => {
    prisma = createPrismaMock('classGroup');

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ClassGroupsService,
        { provide: PrismaService, useValue: prisma },
      ],
    }).compile();

    service = module.get<ClassGroupsService>(ClassGroupsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('when the record does not exist', () => {
    beforeEach(() => {
      prisma.classGroup.findUnique.mockResolvedValue(null);
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
      expect(prisma.classGroup.update).not.toHaveBeenCalled();
    });

    it('remove throws NotFoundException and leaves the record untouched', async () => {
      await expect(service.remove(1)).rejects.toBeInstanceOf(NotFoundException);
      expect(prisma.classGroup.delete).not.toHaveBeenCalled();
    });
  });
});
