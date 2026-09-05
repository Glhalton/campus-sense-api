import type { DayOfWeek } from '../../../generated/prisma/enums.js';

export class CreateClassScheduleDto {
  classGroupId: number;
  roomId: number;
  subjectId: number;
  dayOfWeek: DayOfWeek;
  startTime: Date;
  endTime: Date;
}
