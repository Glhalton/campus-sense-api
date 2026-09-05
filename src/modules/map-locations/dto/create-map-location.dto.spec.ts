import {
  expectAccepted,
  expectRejected,
} from '../../../common/testing/validate-dto.js';
import { CreateMapLocationDto } from './create-map-location.dto.js';

const valid = { mapId: 1, name: 'Entrada principal', x: 10.5, y: 20.25 };

describe('CreateMapLocationDto', () => {
  it('accepts a valid payload', async () => {
    await expectAccepted(CreateMapLocationDto, valid);
  });

  it('rejects coordinates that are not numbers', async () => {
    await expectRejected(CreateMapLocationDto, { ...valid, x: '10.5' });
  });

  it('requires both coordinates', async () => {
    await expectRejected(CreateMapLocationDto, { ...valid, y: undefined });
  });

  it('requires a mapId', async () => {
    await expectRejected(CreateMapLocationDto, { ...valid, mapId: undefined });
  });
});
