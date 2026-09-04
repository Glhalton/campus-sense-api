import { PartialType } from '@nestjs/mapped-types';
import { CreateClassScheduleDto } from './create-class-schedule.dto.js';

export class UpdateClassScheduleDto extends PartialType(CreateClassScheduleDto) {}
