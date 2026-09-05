import { Type } from 'class-transformer';
import { IsDate, IsEnum, IsInt, IsOptional, Min } from 'class-validator';
import { ClassSessionStatus } from '../../../generated/prisma/enums.js';

export class CreateClassSessionDto {
  @IsInt()
  @Min(1)
  classScheduleId: number;

  @Type(() => Date)
  @IsDate()
  date: Date;

  @IsOptional()
  @IsEnum(ClassSessionStatus)
  status?: ClassSessionStatus;

  @Type(() => Date)
  @IsDate()
  startTime: Date;

  @Type(() => Date)
  @IsDate()
  endTime: Date;
}
