import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import request from 'supertest';
import { CampusController } from '../../modules/campus/campus.controller.js';
import { CampusService } from '../../modules/campus/campus.service.js';
import { PrismaService } from '../../database/prisma.service.js';
import { createPrismaMock } from '../../database/prisma.service.mock.js';
import { createValidationPipe } from './validation-pipe.js';

describe('request validation (HTTP)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [CampusController],
      providers: [
        CampusService,
        { provide: PrismaService, useValue: createPrismaMock('campus') },
      ],
    }).compile();

    app = moduleRef.createNestApplication();
    app.useGlobalPipes(createValidationPipe());
    await app.init();
  });

  afterEach(async () => {
    await app.close();
  });

  it('rejects a body with an undeclared property', async () => {
    await request(app.getHttpServer())
      .post('/campus')
      .send({
        id: 99,
        name: 'Campus Central',
        description: 'Unidade principal',
        address: 'Rua das Flores, 100',
        latitude: -23.5505,
        longitude: -46.6333,
      })
      .expect(400);
  });

  it('rejects a body missing a required property', async () => {
    await request(app.getHttpServer())
      .post('/campus')
      .send({ name: 'Campus Central' })
      .expect(400);
  });

  it('rejects a non-numeric id in the route', async () => {
    await request(app.getHttpServer()).get('/campus/abc').expect(400);
  });

  it('rejects a non-numeric id on delete', async () => {
    await request(app.getHttpServer()).delete('/campus/abc').expect(400);
  });
});
