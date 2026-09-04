import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMapLocationDto } from './dto/create-map-location.dto.js';
import { UpdateMapLocationDto } from './dto/update-map-location.dto.js';
import { PrismaService } from '../../database/prisma.service.js';

@Injectable()
export class MapLocationsService {
  constructor(private readonly prisma: PrismaService) {}

  create(createMapLocationDto: CreateMapLocationDto) {
    return this.prisma.mapLocation.create({ data: createMapLocationDto });
  }

  findAll() {
    return this.prisma.mapLocation.findMany({});
  }

  async findOne(id: number) {
    const mapLocation = this.prisma.mapLocation.findUnique({ where: { id } });

    if (!mapLocation) {
      throw new NotFoundException(`Local de mapa com id ${id} não encontrado`);
    }

    return mapLocation;
  }

  update(id: number, updateMapLocationDto: UpdateMapLocationDto) {
    return this.prisma.mapLocation.update({
      where: { id },
      data: updateMapLocationDto,
    });
  }

  remove(id: number) {
    return this.prisma.mapLocation.delete({ where: { id } });
  }
}
