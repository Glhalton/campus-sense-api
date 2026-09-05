import { Type } from 'class-transformer';
import { IsDate, IsEnum, IsInt, Min } from 'class-validator';
import { DayOfWeek } from '../../../generated/prisma/enums.js';

export class CreateClassScheduleDto {
  @IsInt()
  @Min(1)
  classGroupId: number;

  @IsInt()
  @Min(1)
  roomId: number;

  @IsInt()
  @Min(1)
  subjectId: number;

  @IsEnum(DayOfWeek)
  dayOfWeek: DayOfWeek;

  @Type(() => Date)
  @IsDate()
  startTime: Date;

  @Type(() => Date)
  @IsDate()
  endTime: Date;
}
