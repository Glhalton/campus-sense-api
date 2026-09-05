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

  async update(id: number, updateBuildingDto: UpdateBuildingDto) {
    await this.findOne(id);

    return this.prisma.building.update({
      where: { id },
      data: updateBuildingDto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.building.delete({ where: { id } });
  }
}
