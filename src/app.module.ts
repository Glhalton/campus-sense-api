import { Module } from '@nestjs/common';
import { ProfessorsModule } from './modules/professors/professors.module.js';
import { PrismaModule } from './database/prisma.module.js';
import { CampusModule } from './modules/campus/campus.module.js';

@Module({
  imports: [
    PrismaModule,
    ProfessorsModule,
    CampusModule,
  ],
})
export class AppModule {}
