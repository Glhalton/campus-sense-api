import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMapDto } from './dto/create-map.dto.js';
import { UpdateMapDto } from './dto/update-map.dto.js';
import { PrismaService } from '../../database/prisma.service.js';

@Injectable()
export class MapsService {
  constructor(private readonly prisma: PrismaService) {}

  create(createMapDto: CreateMapDto) {
    return this.prisma.map.create({ data: createMapDto });
  }

  findAll() {
    return this.prisma.map.findMany({});
  }

  async findOne(id: number) {
    const map = this.prisma.map.findUnique({ where: { id } });

    if (!map) {
      throw new NotFoundException(`Mapa com id ${id} não encontrado`);
    }

    return map;
  }

  update(id: number, updateMapDto: UpdateMapDto) {
    return this.prisma.map.update({ where: { id }, data: updateMapDto });
  }

  remove(id: number) {
    return this.prisma.map.delete({ where: { id } });
  }
}
