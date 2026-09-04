import { Test, TestingModule } from '@nestjs/testing';
import { ClassGroupsController } from './class-groups.controller.js';
import { ClassGroupsService } from './class-groups.service.js';
import { PrismaService } from '../../database/prisma.service.js';
import { createPrismaMock } from '../../database/prisma.service.mock.js';

describe('ClassGroupsController', () => {
  let controller: ClassGroupsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClassGroupsController],
      providers: [
        ClassGroupsService,
        { provide: PrismaService, useValue: createPrismaMock('classGroup') },
      ],
    }).compile();

    controller = module.get<ClassGroupsController>(ClassGroupsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
