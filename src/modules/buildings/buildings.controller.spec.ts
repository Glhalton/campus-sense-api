import { Test, TestingModule } from '@nestjs/testing';
import { BuildingsController } from './buildings.controller.js';
import { BuildingsService } from './buildings.service.js';
import { PrismaService } from '../../database/prisma.service.js';
import { createPrismaMock } from '../../database/prisma.service.mock.js';

describe('BuildingsController', () => {
  let controller: BuildingsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BuildingsController],
      providers: [
        BuildingsService,
        { provide: PrismaService, useValue: createPrismaMock('building') },
      ],
    }).compile();

    controller = module.get<BuildingsController>(BuildingsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
