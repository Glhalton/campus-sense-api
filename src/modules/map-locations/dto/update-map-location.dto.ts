import { PartialType } from '@nestjs/mapped-types';
import { CreateMapLocationDto } from './create-map-location.dto.js';

export class UpdateMapLocationDto extends PartialType(CreateMapLocationDto) {}
