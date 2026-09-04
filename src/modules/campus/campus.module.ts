import { Module } from '@nestjs/common';
import { CampusService } from './campus.service.js';
import { CampusController } from './campus.controller.js';

@Module({
  controllers: [CampusController],
  providers: [CampusService],
})
export class CampusModule {}
