import { Test, TestingModule } from '@nestjs/testing';
import { ClassGroupsService } from './class-groups.service.js';
import { PrismaService } from '../../database/prisma.service.js';
import { createPrismaMock } from '../../database/prisma.service.mock.js';

describe('ClassGroupsService', () => {
  let service: ClassGroupsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ClassGroupsService,
        { provide: PrismaService, useValue: createPrismaMock('classGroup') },
      ],
    }).compile();

    service = module.get<ClassGroupsService>(ClassGroupsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
