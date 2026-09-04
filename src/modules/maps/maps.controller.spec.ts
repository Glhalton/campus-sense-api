import { Test, TestingModule } from '@nestjs/testing';
import { MapsController } from './maps.controller.js';
import { MapsService } from './maps.service.js';
import { PrismaService } from '../../database/prisma.service.js';
import { createPrismaMock } from '../../database/prisma.service.mock.js';

describe('MapsController', () => {
  let controller: MapsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MapsController],
      providers: [
        MapsService,
        { provide: PrismaService, useValue: createPrismaMock('map') },
      ],
    }).compile();

    controller = module.get<MapsController>(MapsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
