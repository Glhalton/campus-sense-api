import { Test, TestingModule } from '@nestjs/testing';
import { ClassSchedulesService } from './class-schedules.service.js';
import { PrismaService } from '../../database/prisma.service.js';
import { createPrismaMock } from '../../database/prisma.service.mock.js';

describe('ClassSchedulesService', () => {
  let service: ClassSchedulesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ClassSchedulesService,
        { provide: PrismaService, useValue: createPrismaMock('classSchedule') },
      ],
    }).compile();

    service = module.get<ClassSchedulesService>(ClassSchedulesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
