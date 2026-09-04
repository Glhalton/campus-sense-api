import { Test, TestingModule } from '@nestjs/testing';
import { FloorsController } from './floors.controller.js';
import { FloorsService } from './floors.service.js';
import { PrismaService } from '../../database/prisma.service.js';
import { createPrismaMock } from '../../database/prisma.service.mock.js';

describe('FloorsController', () => {
  let controller: FloorsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FloorsController],
      providers: [
        FloorsService,
        { provide: PrismaService, useValue: createPrismaMock('floor') },
      ],
    }).compile();

    controller = module.get<FloorsController>(FloorsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
