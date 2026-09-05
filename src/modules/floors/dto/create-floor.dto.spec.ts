import {
  expectAccepted,
  expectRejected,
} from '../../../common/testing/validate-dto.js';
import { CreateFloorDto } from './create-floor.dto.js';

const valid = { buildingId: 1, name: 'Térreo', number: 0 };

describe('CreateFloorDto', () => {
  it('accepts a valid payload', async () => {
    await expectAccepted(CreateFloorDto, valid);
  });

  it('accepts a negative number for a basement', async () => {
    await expectAccepted(CreateFloorDto, {
      ...valid,
      name: 'Subsolo',
      number: -1,
    });
  });

  it('rejects a fractional number', async () => {
    await expectRejected(CreateFloorDto, { ...valid, number: 1.5 });
  });

  it('requires a buildingId', async () => {
    await expectRejected(CreateFloorDto, { ...valid, buildingId: undefined });
  });
});
