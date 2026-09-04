import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateClassSessionDto } from './dto/create-class-session.dto.js';
import { UpdateClassSessionDto } from './dto/update-class-session.dto.js';
import { PrismaService } from '../../database/prisma.service.js';

@Injectable()
export class ClassSessionsService {
  constructor(private readonly prisma: PrismaService) {}

  create(createClassSessionDto: CreateClassSessionDto) {
    return this.prisma.classSession.create({ data: createClassSessionDto });
  }

  findAll() {
    return this.prisma.classSession.findMany({});
  }

  async findOne(id: number) {
    const classSession = await this.prisma.classSession.findUnique({
      where: { id },
    });

    if (!classSession) {
      throw new NotFoundException(`Sessão de aula com id ${id} não encontrado`);
    }

    return classSession;
  }

  async update(id: number, updateClassSessionDto: UpdateClassSessionDto) {
    await this.findOne(id);

    return this.prisma.classSession.update({
      where: { id },
      data: updateClassSessionDto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.classSession.delete({ where: { id } });
  }
}
