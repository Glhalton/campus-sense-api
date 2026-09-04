import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFloorDto } from './dto/create-floor.dto.js';
import { UpdateFloorDto } from './dto/update-floor.dto.js';
import { PrismaService } from '../../database/prisma.service.js';

@Injectable()
export class FloorsService {
  constructor(private readonly prisma: PrismaService) {}

  create(createFloorDto: CreateFloorDto) {
    return this.prisma.floor.create({ data: createFloorDto });
  }

  findAll() {
    return this.prisma.floor.findMany({});
  }

  async findOne(id: number) {
    const floor = await this.prisma.floor.findUnique({ where: { id } });

    if (!floor) {
      throw new NotFoundException(`Andar com id ${id} não encontrado`);
    }

    return floor;
  }

  async update(id: number, updateFloorDto: UpdateFloorDto) {
    await this.findOne(id);

    return this.prisma.floor.update({ where: { id }, data: updateFloorDto });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.floor.delete({ where: { id } });
  }
}
