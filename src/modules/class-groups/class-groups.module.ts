import { Module } from '@nestjs/common';
import { ClassGroupsService } from './class-groups.service.js';
import { ClassGroupsController } from './class-groups.controller.js';

@Module({
  controllers: [ClassGroupsController],
  providers: [ClassGroupsService],
})
export class ClassGroupsModule {}
