import {
  expectAccepted,
  expectRejected,
} from '../../../common/testing/validate-dto.js';
import { CreateClassSessionDto } from './create-class-session.dto.js';

const valid = {
  classScheduleId: 1,
  date: '2026-03-10T00:00:00.000Z',
  startTime: '1970-01-01T08:00:00.000Z',
  endTime: '1970-01-01T09:40:00.000Z',
};

describe('CreateClassSessionDto', () => {
  it('accepts a valid payload', async () => {
    await expectAccepted(CreateClassSessionDto, valid);
  });

  it('accepts an explicit status from the enum', async () => {
    const value = await expectAccepted(CreateClassSessionDto, {
      ...valid,
      status: 'CANCELLED',
    });

    expect(value.status).toBe('CANCELLED');
  });

  it('rejects a status outside the enum', async () => {
    await expectRejected(CreateClassSessionDto, {
      ...valid,
      status: 'PAUSED',
    });
  });

  it('rejects a date that cannot be parsed', async () => {
    await expectRejected(CreateClassSessionDto, { ...valid, date: 'ontem' });
  });

  it('requires a classScheduleId', async () => {
    await expectRejected(CreateClassSessionDto, {
      ...valid,
      classScheduleId: undefined,
    });
  });
});
