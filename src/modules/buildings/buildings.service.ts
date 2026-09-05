import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBuildingDto } from './dto/create-building.dto.js';
import { UpdateBuildingDto } from './dto/update-building.dto.js';
import { PrismaService } from '../../database/prisma.service.js';

@Injectable()
export class BuildingsService {
  constructor(private readonly prisma: PrismaService) {}

  create(createBuildingDto: CreateBuildingDto) {
    return this.prisma.building.create({ data: createBuildingDto });
  }

  findAll() {
    return this.prisma.building.findMany({});
  }

  async findOne(id: number) {
    const building = await this.prisma.building.findUnique({ where: { id } });

    if (!building) {
      throw new NotFoundException(`Construção com id ${id} não encontrado`);
    }

    return building;
  }

  update(id: number, updateBuildingDto: UpdateBuildingDto) {
    return this.prisma.building.update({
      where: { id },
      data: updateBuildingDto,
    });
  }

  remove(id: number) {
    return this.prisma.building.delete({ where: { id } });
  }
}
