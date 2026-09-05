import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSubjectDto } from './dto/create-subject.dto.js';
import { UpdateSubjectDto } from './dto/update-subject.dto.js';
import { PrismaService } from '../../database/prisma.service.js';

@Injectable()
export class SubjectsService {
  constructor(private readonly prisma: PrismaService) {}

  create(createSubjectDto: CreateSubjectDto) {
    return this.prisma.subject.create({ data: createSubjectDto });
  }

  findAll() {
    return this.prisma.subject.findMany({});
  }

  async findOne(id: number) {
    const subject = await this.prisma.subject.findUnique({ where: { id } });

    if (!subject) {
      throw new NotFoundException(`Disciplina com id ${id} não encontrada`);
    }

    return subject;
  }

  async update(id: number, updateSubjectDto: UpdateSubjectDto) {
    await this.findOne(id);

    return this.prisma.subject.update({
      where: { id },
      data: updateSubjectDto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.subject.delete({ where: { id } });
  }
}
