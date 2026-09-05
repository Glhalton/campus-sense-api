import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto.js';
import { UpdateRoomDto } from './dto/update-room.dto.js';
import { PrismaService } from '../../database/prisma.service.js';

@Injectable()
export class RoomsService {
  constructor(private readonly prisma: PrismaService) {}

  create(createRoomDto: CreateRoomDto) {
    return this.prisma.room.create({ data: createRoomDto });
  }

  findAll() {
    return this.prisma.room.findMany({});
  }

  async findOne(id: number) {
    const room = await this.prisma.room.findUnique({ where: { id } });

    if (!room) {
      throw new NotFoundException(`Sala com id ${id} não encontrada`);
    }

    return room;
  }

  update(id: number, updateRoomDto: UpdateRoomDto) {
    return this.prisma.room.update({ where: { id }, data: updateRoomDto });
  }

  remove(id: number) {
    return this.prisma.room.delete({ where: { id } });
  }
}
