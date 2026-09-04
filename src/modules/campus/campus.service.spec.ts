import { Test, TestingModule } from '@nestjs/testing';
import { CampusService } from './campus.service.js';
import { PrismaService } from '../../database/prisma.service.js';
import { createPrismaMock } from '../../database/prisma.service.mock.js';

describe('CampusService', () => {
  let service: CampusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CampusService,
        { provide: PrismaService, useValue: createPrismaMock('campus') },
      ],
    }).compile();

    service = module.get<CampusService>(CampusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
