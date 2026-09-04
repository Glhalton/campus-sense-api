import { Module } from '@nestjs/common';
import { FloorsService } from './floors.service.js';
import { FloorsController } from './floors.controller.js';

@Module({
  controllers: [FloorsController],
  providers: [FloorsService],
})
export class FloorsModule {}
