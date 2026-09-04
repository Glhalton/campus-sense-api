import { Test, TestingModule } from '@nestjs/testing';
import { FloorsService } from './floors.service.js';
import { PrismaService } from '../../database/prisma.service.js';
import { createPrismaMock } from '../../database/prisma.service.mock.js';

describe('FloorsService', () => {
  let service: FloorsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FloorsService,
        { provide: PrismaService, useValue: createPrismaMock('floor') },
      ],
    }).compile();

    service = module.get<FloorsService>(FloorsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
