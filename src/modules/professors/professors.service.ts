import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProfessorDto } from './dto/create-professor.dto.js';
import { UpdateProfessorDto } from './dto/update-professor.dto.js';
import { PrismaService } from '../../database/prisma.service.js';

@Injectable()
export class ProfessorsService {
  constructor(private readonly prisma: PrismaService) {}

  create(createProfessorDto: CreateProfessorDto) {
    return this.prisma.professor.create({ data: createProfessorDto });
  }

  findAll() {
    return this.prisma.professor.findMany({});
  }

  async findOne(id: number) {
    const professor = await this.prisma.professor.findUnique({ where: { id } });

    if (!professor) {
      throw new NotFoundException(`Professor com id ${id} não encontrado`);
    }

    return professor;
  }

  update(id: number, updateProfessorDto: UpdateProfessorDto) {
    return this.prisma.professor.update({
      where: { id },
      data: updateProfessorDto,
    });
  }

  remove(id: number) {
    return this.prisma.professor.delete({ where: { id } });
  }
}
