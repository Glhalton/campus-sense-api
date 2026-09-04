import { Test, TestingModule } from '@nestjs/testing';
import { ClassSessionsService } from './class-sessions.service.js';
import { PrismaService } from '../../database/prisma.service.js';
import { createPrismaMock } from '../../database/prisma.service.mock.js';

describe('ClassSessionsService', () => {
  let service: ClassSessionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ClassSessionsService,
        { provide: PrismaService, useValue: createPrismaMock('classSession') },
      ],
    }).compile();

    service = module.get<ClassSessionsService>(ClassSessionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
