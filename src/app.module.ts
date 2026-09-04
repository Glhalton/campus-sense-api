import { Module } from '@nestjs/common';
import { ProfessorsModule } from './modules/professors/professors.module.js';
import { PrismaModule } from './database/prisma.module.js';
import { CampusModule } from './modules/campus/campus.module.js';
import { FloorsModule } from './modules/floors/floors.module.js';
import { BuildingsModule } from './modules/buildings/buildings.module.js';

@Module({
  imports: [
    PrismaModule,
    ProfessorsModule,
    CampusModule,
    BuildingsModule,
    FloorsModule,
  ],
})
export class AppModule {}
