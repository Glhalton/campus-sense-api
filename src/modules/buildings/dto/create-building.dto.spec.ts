import {
  expectAccepted,
  expectRejected,
} from '../../../common/testing/validate-dto.js';
import { CreateBuildingDto } from './create-building.dto.js';

const valid = { campusId: 1, name: 'Bloco A', description: 'Salas de aula' };

describe('CreateBuildingDto', () => {
  it('accepts a valid payload', async () => {
    await expectAccepted(CreateBuildingDto, valid);
  });

  it('requires a positive campusId', async () => {
    await expectRejected(CreateBuildingDto, { ...valid, campusId: 0 });
  });

  it('rejects a fractional campusId', async () => {
    await expectRejected(CreateBuildingDto, { ...valid, campusId: 1.5 });
  });

  it('requires a name', async () => {
    await expectRejected(CreateBuildingDto, { ...valid, name: '   ' });
  });
});
