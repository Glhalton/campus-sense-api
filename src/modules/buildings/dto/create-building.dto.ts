import { IsInt, IsNotEmpty, IsString, MaxLength, Min } from 'class-validator';
import { Trim } from '../../../common/validation/trim.decorator.js';

export class CreateBuildingDto {
  @IsInt()
  @Min(1)
  campusId: number;

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
