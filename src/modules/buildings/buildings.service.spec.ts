import { Test, TestingModule } from '@nestjs/testing';
import { BuildingsService } from './buildings.service.js';
import { PrismaService } from '../../database/prisma.service.js';
import { createPrismaMock } from '../../database/prisma.service.mock.js';

describe('BuildingsService', () => {
  let service: BuildingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BuildingsService,
        { provide: PrismaService, useValue: createPrismaMock('building') },
      ],
    }).compile();

    service = module.get<BuildingsService>(BuildingsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
