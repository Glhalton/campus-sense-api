import { PartialType } from '@nestjs/mapped-types';
import { CreateClassSessionDto } from './create-class-session.dto.js';
import { ClassSessionStatus } from '../../../generated/prisma/client.js';

export class UpdateClassSessionDto extends PartialType(CreateClassSessionDto) {
  status?: ClassSessionStatus;
}
