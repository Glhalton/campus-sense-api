import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto.js';
import { UpdateCourseDto } from './dto/update-course.dto.js';
import { PrismaService } from '../../database/prisma.service.js';

@Injectable()
export class CoursesService {
  constructor(private readonly prisma: PrismaService) {}

  create(createCourseDto: CreateCourseDto) {
    return this.prisma.course.create({ data: createCourseDto });
  }

  findAll() {
    return this.prisma.course.findMany({});
  }

  async findOne(id: number) {
    const course = await this.prisma.course.findUnique({ where: { id } });

    if (!course) {
      throw new NotFoundException(`Curso com id ${id} não encontrado`);
    }

    return course;
  }

  async update(id: number, updateCourseDto: UpdateCourseDto) {
    await this.findOne(id);

    return this.prisma.course.update({ where: { id }, data: updateCourseDto });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.course.delete({ where: { id } });
  }
}
