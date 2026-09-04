import { Test, TestingModule } from '@nestjs/testing';
import { ProfessorsController } from './professors.controller.js';
import { ProfessorsService } from './professors.service.js';
import { PrismaService } from '../../database/prisma.service.js';
import { createPrismaMock } from '../../database/prisma.service.mock.js';

describe('ProfessorsController', () => {
  let controller: ProfessorsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProfessorsController],
      providers: [
        ProfessorsService,
        { provide: PrismaService, useValue: createPrismaMock('professor') },
      ],
    }).compile();

    controller = module.get<ProfessorsController>(ProfessorsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
