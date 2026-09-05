import {
  expectAccepted,
  expectRejected,
} from '../../../common/testing/validate-dto.js';
import { CreateRoomDto } from './create-room.dto.js';

const valid = {
  floorId: 1,
  mapLocationId: 2,
  name: 'Lab 01',
  roomTypeId: 3,
  capacity: 40,
};

describe('CreateRoomDto', () => {
  it('accepts a valid payload', async () => {
    await expectAccepted(CreateRoomDto, valid);
  });

  it('accepts optional coordinates', async () => {
    await expectAccepted(CreateRoomDto, {
      ...valid,
      latitude: -23.5505,
      longitude: -46.6333,
    });
  });

  it('rejects a capacity below one', async () => {
    await expectRejected(CreateRoomDto, { ...valid, capacity: 0 });
  });

  it('rejects a latitude outside the valid range', async () => {
    await expectRejected(CreateRoomDto, { ...valid, latitude: 100 });
  });

  it('requires a roomTypeId', async () => {
    await expectRejected(CreateRoomDto, { ...valid, roomTypeId: undefined });
  });
});
