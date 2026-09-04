import { Test, TestingModule } from '@nestjs/testing';
import { ProfessorsService } from './professors.service.js';
import { PrismaService } from '../../database/prisma.service.js';
import { createPrismaMock } from '../../database/prisma.service.mock.js';

describe('ProfessorsService', () => {
  let service: ProfessorsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProfessorsService,
        { provide: PrismaService, useValue: createPrismaMock('professor') },
      ],
    }).compile();

    service = module.get<ProfessorsService>(ProfessorsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
