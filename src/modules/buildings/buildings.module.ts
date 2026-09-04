import { Module } from '@nestjs/common';
import { BuildingsService } from './buildings.service.js';
import { BuildingsController } from './buildings.controller.js';

@Module({
  controllers: [BuildingsController],
  providers: [BuildingsService],
})
export class BuildingsModule {}
