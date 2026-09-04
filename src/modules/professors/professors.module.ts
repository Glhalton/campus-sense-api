import { Module } from '@nestjs/common';
import { ProfessorsService } from './professors.service.js';
import { ProfessorsController } from './professors.controller.js';
import { PrismaModule } from '../../database/prisma.module.js';

@Module({
  controllers: [ProfessorsController],
  providers: [ProfessorsService],
})
export class ProfessorsModule {}
