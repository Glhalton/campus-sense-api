import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { Trim } from '../../../common/validation/trim.decorator.js';

export class CreateCourseDto {
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
