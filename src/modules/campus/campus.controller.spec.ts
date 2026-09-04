import { Test, TestingModule } from '@nestjs/testing';
import { CampusController } from './campus.controller.js';
import { CampusService } from './campus.service.js';
import { PrismaService } from '../../database/prisma.service.js';
import { createPrismaMock } from '../../database/prisma.service.mock.js';

describe('CampusController', () => {
  let controller: CampusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CampusController],
      providers: [
        CampusService,
        { provide: PrismaService, useValue: createPrismaMock('campus') },
      ],
    }).compile();

    controller = module.get<CampusController>(CampusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
