import { Test, TestingModule } from '@nestjs/testing';
import { ClassSchedulesController } from './class-schedules.controller.js';
import { ClassSchedulesService } from './class-schedules.service.js';
import { PrismaService } from '../../database/prisma.service.js';
import { createPrismaMock } from '../../database/prisma.service.mock.js';

describe('ClassSchedulesController', () => {
  let controller: ClassSchedulesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClassSchedulesController],
      providers: [
        ClassSchedulesService,
        { provide: PrismaService, useValue: createPrismaMock('classSchedule') },
      ],
    }).compile();

    controller = module.get<ClassSchedulesController>(ClassSchedulesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
