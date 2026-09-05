import { IsInt, IsNotEmpty, IsString, MaxLength, Min } from 'class-validator';
import { Trim } from '../../../common/validation/trim.decorator.js';

export class CreateSubjectDto {
  @IsInt()
  @Min(1)
  courseId: number;

  @IsInt()
  @Min(1)
  professorId: number;

  @Trim()
  @IsString()
  @IsNotEmpty()
  @MaxLength(120)
  name: string;

  @Trim()
  @IsString()
  @IsNotEmpty()
  @MaxLength(500)
  description: string;
}
