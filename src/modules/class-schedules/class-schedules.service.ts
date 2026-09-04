import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateClassScheduleDto } from './dto/create-class-schedule.dto.js';
import { UpdateClassScheduleDto } from './dto/update-class-schedule.dto.js';
import { PrismaService } from '../../database/prisma.service.js';

@Injectable()
export class ClassSchedulesService {
  constructor(private readonly prisma: PrismaService) {}

  create(createClassScheduleDto: CreateClassScheduleDto) {
    return this.prisma.classSchedule.create({ data: createClassScheduleDto });
  }

  findAll() {
    return this.prisma.classSchedule.findMany({});
  }

  async findOne(id: number) {
    const classSchedule = await this.prisma.classSchedule.findUnique({
      where: { id },
    });

    if (!classSchedule) {
      throw new NotFoundException(
        `Cronograma de turma com id ${id} não encontrado`,
      );
    }

    return classSchedule;
  }

  async update(id: number, updateClassScheduleDto: UpdateClassScheduleDto) {
    await this.findOne(id);

    return this.prisma.classSchedule.update({
      where: { id },
      data: updateClassScheduleDto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.classSchedule.delete({ where: { id } });
  }
}
