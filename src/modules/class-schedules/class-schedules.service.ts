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

  findOne(id: number) {
    const classSchedule = this.prisma.classSchedule.findUnique({
      where: { id },
    });

    if (!classSchedule) {
      throw new NotFoundException(
        `Cronograma de turma com id ${id} não encontrado`,
      );
    }

    return classSchedule;
  }

  update(id: number, updateClassScheduleDto: UpdateClassScheduleDto) {
    return this.prisma.classSchedule.update({
      where: { id },
      data: updateClassScheduleDto,
    });
  }

  remove(id: number) {
    return this.prisma.classSchedule.delete({ where: { id } });
  }
}
