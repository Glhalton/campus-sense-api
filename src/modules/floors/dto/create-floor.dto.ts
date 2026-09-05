import { IsInt, IsNotEmpty, IsString, MaxLength, Min } from 'class-validator';
import { Trim } from '../../../common/validation/trim.decorator.js';

export class CreateFloorDto {
  @IsInt()
  @Min(1)
  buildingId: number;

  @Trim()
  @IsString()
  @IsNotEmpty()
  @MaxLength(120)
  name: string;

  @IsInt()
  number: number;
}
