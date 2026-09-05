import {
  expectAccepted,
  expectRejected,
} from '../../../common/testing/validate-dto.js';
import { CreateCampusDto } from './create-campus.dto.js';

const valid = {
  name: 'Campus Central',
  description: 'Unidade principal',
  address: 'Rua das Flores, 100',
  latitude: -23.5505,
  longitude: -46.6333,
};

describe('CreateCampusDto', () => {
  it('accepts a valid payload', async () => {
    await expectAccepted(CreateCampusDto, valid);
  });

  it('rejects a latitude outside the valid range', async () => {
    await expectRejected(CreateCampusDto, { ...valid, latitude: 91 });
  });

  it('rejects a longitude outside the valid range', async () => {
    await expectRejected(CreateCampusDto, { ...valid, longitude: -181 });
  });

  it('requires an address', async () => {
    await expectRejected(CreateCampusDto, { ...valid, address: '' });
  });

  it('rejects a latitude sent as a string', async () => {
    await expectRejected(CreateCampusDto, { ...valid, latitude: '-23.5505' });
  });
});
