import { ClassSessionStatus } from '../../../generated/prisma/client.js';

export class CreateClassSessionDto {
  classScheduleId: number;
  date: Date;
  startTime: Date;
  endTime: Date;
}
