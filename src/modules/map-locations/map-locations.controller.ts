import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MapLocationsService } from './map-locations.service.js';
import { CreateMapLocationDto } from './dto/create-map-location.dto.js';
import { UpdateMapLocationDto } from './dto/update-map-location.dto.js';

@Controller('map-locations')
export class MapLocationsController {
  constructor(private readonly mapLocationsService: MapLocationsService) {}

  @Post()
  create(@Body() createMapLocationDto: CreateMapLocationDto) {
    return this.mapLocationsService.create(createMapLocationDto);
  }

  @Get()
  findAll() {
    return this.mapLocationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mapLocationsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMapLocationDto: UpdateMapLocationDto) {
    return this.mapLocationsService.update(+id, updateMapLocationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mapLocationsService.remove(+id);
  }
}
