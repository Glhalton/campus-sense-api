import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundException } from '@nestjs/common';
import { CoursesService } from './courses.service.js';
import { PrismaService } from '../../database/prisma.service.js';
import { createPrismaMock } from '../../database/prisma.service.mock.js';

describe('CoursesService', () => {
  let service: CoursesService;
  let prisma: ReturnType<typeof createPrismaMock<'course'>>;

  beforeEach(async () => {
    prisma = createPrismaMock('course');

    const module: TestingModule = await Test.createTestingModule({
      providers: [CoursesService, { provide: PrismaService, useValue: prisma }],
    }).compile();

    service = module.get<CoursesService>(CoursesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('when the record does not exist', () => {
    beforeEach(() => {
      prisma.course.findUnique.mockResolvedValue(null);
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
      expect(prisma.course.update).not.toHaveBeenCalled();
    });

    it('remove throws NotFoundException and leaves the record untouched', async () => {
      await expect(service.remove(1)).rejects.toBeInstanceOf(NotFoundException);
      expect(prisma.course.delete).not.toHaveBeenCalled();
    });
  });
});
