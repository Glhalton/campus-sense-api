import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  Min,
} from 'class-validator';
import { Trim } from '../../../common/validation/trim.decorator.js';

export class CreateMapLocationDto {
  @IsInt()
  @Min(1)
  mapId: number;

  @Trim()
  @IsString()
  @IsNotEmpty()
  @MaxLength(120)
  name: string;

  @IsNumber()
  x: number;

  @IsNumber()
  y: number;
}
