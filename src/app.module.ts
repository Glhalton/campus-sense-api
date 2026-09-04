import { Module } from '@nestjs/common';
import { ProfessorsModule } from './modules/professors/professors.module.js';
import { PrismaModule } from './database/prisma.module.js';
import { CampusModule } from './modules/campus/campus.module.js';
import { MapsModule } from './modules/maps/maps.module.js';
import { RoomsModule } from './modules/rooms/rooms.module.js';
import { FloorsModule } from './modules/floors/floors.module.js';
import { BuildingsModule } from './modules/buildings/buildings.module.js';
import { MapLocationsModule } from './modules/map-locations/map-locations.module.js';
import { CoursesModule } from './modules/courses/courses.module.js';
import { SubjectsModule } from './modules/subjects/subjects.module.js';
import { ClassGroupsModule } from './modules/class-groups/class-groups.module.js';
import { ClassSchedulesModule } from './modules/class-schedules/class-schedules.module.js';

@Module({
  imports: [
    PrismaModule,
    ProfessorsModule,
    CampusModule,
    BuildingsModule,
    FloorsModule,
    RoomsModule,
    MapsModule,
    MapLocationsModule,
    CoursesModule,
    SubjectsModule,
    ClassGroupsModule,
    ClassSchedulesModule,
  ],
})
export class AppModule {}
