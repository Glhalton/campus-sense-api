import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCampusDto } from './dto/create-campus.dto.js';
import { UpdateCampusDto } from './dto/update-campus.dto.js';
import { PrismaService } from '../../database/prisma.service.js';

@Injectable()
export class CampusService {
  constructor(private readonly prisma: PrismaService) {}

  create(createCampusDto: CreateCampusDto) {
    return this.prisma.campus.create({ data: createCampusDto });
  }

  findAll() {
    return this.prisma.campus.findMany({});
  }

  async findOne(id: number) {
    const campus = await this.prisma.campus.findUnique({ where: { id } });

    if (!campus) {
      throw new NotFoundException(`Campus com id ${id} não encontrado`);
    }

    return campus;
  }

  update(id: number, updateCampusDto: UpdateCampusDto) {
    return this.prisma.campus.update({ where: { id }, data: updateCampusDto });
  }

  remove(id: number) {
    return this.prisma.campus.delete({ where: { id } });
  }
}
