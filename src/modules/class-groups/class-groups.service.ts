import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateClassGroupDto } from './dto/create-class-group.dto.js';
import { UpdateClassGroupDto } from './dto/update-class-group.dto.js';
import { PrismaService } from '../../database/prisma.service.js';

@Injectable()
export class ClassGroupsService {
  constructor(private readonly prisma: PrismaService) {}

  create(createClassGroupDto: CreateClassGroupDto) {
    return this.prisma.classGroup.create({ data: createClassGroupDto });
  }

  findAll() {
    return this.prisma.classGroup.findMany({});
  }

  findOne(id: number) {
    const classGroup = this.prisma.classGroup.findUnique({ where: { id } });

    if (!classGroup) {
      throw new NotFoundException(`Turma com id ${id} não encontrada`);
    }

    return classGroup;
  }

  update(id: number, updateClassGroupDto: UpdateClassGroupDto) {
    return this.prisma.classGroup.update({
      where: { id },
      data: updateClassGroupDto,
    });
  }

  remove(id: number) {
    return this.prisma.classGroup.delete({ where: { id } });
  }
}
