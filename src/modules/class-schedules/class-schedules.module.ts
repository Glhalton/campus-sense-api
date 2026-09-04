import { Module } from '@nestjs/common';
import { ClassSchedulesService } from './class-schedules.service.js';
import { ClassSchedulesController } from './class-schedules.controller.js';

@Module({
  controllers: [ClassSchedulesController],
  providers: [ClassSchedulesService],
})
export class ClassSchedulesModule {}
