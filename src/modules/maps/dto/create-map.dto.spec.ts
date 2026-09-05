import {
  expectAccepted,
  expectRejected,
} from '../../../common/testing/validate-dto.js';
import { CreateMapDto } from './create-map.dto.js';

const valid = {
  campusId: 1,
  name: 'Mapa geral',
  description: 'Visão do campus',
};

describe('CreateMapDto', () => {
  it('accepts a payload without the optional scopes', async () => {
    await expectAccepted(CreateMapDto, valid);
  });

  it('accepts a payload scoped to a building and a floor', async () => {
    await expectAccepted(CreateMapDto, { ...valid, buildingId: 2, floorId: 3 });
  });

  it('rejects a buildingId that is not a positive integer', async () => {
    await expectRejected(CreateMapDto, { ...valid, buildingId: 0 });
  });

  it('requires a campusId', async () => {
    await expectRejected(CreateMapDto, { ...valid, campusId: undefined });
  });
});
