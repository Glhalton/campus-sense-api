import { Module } from '@nestjs/common';
import { MapLocationsService } from './map-locations.service.js';
import { MapLocationsController } from './map-locations.controller.js';

@Module({
  controllers: [MapLocationsController],
  providers: [MapLocationsService],
})
export class MapLocationsModule {}
