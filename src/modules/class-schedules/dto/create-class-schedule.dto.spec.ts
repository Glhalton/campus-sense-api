import {
  expectAccepted,
  expectRejected,
} from '../../../common/testing/validate-dto.js';
import { CreateClassScheduleDto } from './create-class-schedule.dto.js';

const valid = {
  classGroupId: 1,
  roomId: 2,
  subjectId: 3,
  dayOfWeek: 'MONDAY',
  startTime: '1970-01-01T08:00:00.000Z',
  endTime: '1970-01-01T09:40:00.000Z',
};

describe('CreateClassScheduleDto', () => {
  it('accepts a valid payload', async () => {
    await expectAccepted(CreateClassScheduleDto, valid);
  });

  it('turns the ISO times into Date instances', async () => {
    const value = await expectAccepted(CreateClassScheduleDto, valid);

    expect(value.startTime).toBeInstanceOf(Date);
    expect(value.endTime).toBeInstanceOf(Date);
  });

  it('rejects a weekday outside the enum', async () => {
    const messages = await expectRejected(CreateClassScheduleDto, {
      ...valid,
      dayOfWeek: 'segunda',
    });

    expect(messages.join(' ')).toContain('dayOfWeek');
  });

  it('rejects a bare clock time that is not a full timestamp', async () => {
    await expectRejected(CreateClassScheduleDto, {
      ...valid,
      startTime: '08:00',
    });
  });

  it('requires a subjectId', async () => {
    await expectRejected(CreateClassScheduleDto, {
      ...valid,
      subjectId: undefined,
    });
  });
});
