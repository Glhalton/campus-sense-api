import { Test, TestingModule } from '@nestjs/testing';
import { ClassSchedulesController } from './class-schedules.controller.js';
import { ClassSchedulesService } from './class-schedules.service.js';

describe('ClassSchedulesController', () => {
  let controller: ClassSchedulesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClassSchedulesController],
      providers: [ClassSchedulesService],
    }).compile();

    controller = module.get<ClassSchedulesController>(ClassSchedulesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
