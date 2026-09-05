import {
  IsInt,
  IsLatitude,
  IsLongitude,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  Min,
} from 'class-validator';
import { Trim } from '../../../common/validation/trim.decorator.js';

export class CreateRoomDto {
  @IsInt()
  @Min(1)
  floorId: number;

  @IsInt()
  @Min(1)
  mapLocationId: number;

  @Trim()
  @IsString()
  @IsNotEmpty()
  @MaxLength(120)
  name: string;

  @IsInt()
  @Min(1)
  roomTypeId: number;

  @IsInt()
  @Min(1)
  capacity: number;

  @IsOptional()
  @IsNumber()
  @IsLatitude()
  latitude?: number;

  @IsOptional()
  @IsNumber()
  @IsLongitude()
  longitude?: number;
}
