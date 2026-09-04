import { Module } from '@nestjs/common';
import { ProfessorsModule } from './modules/professors/professors.module.js';
import { PrismaModule } from './database/prisma.module.js';

@Module({
  imports: [PrismaModule, ProfessorsModule],
})
export class AppModule {}
