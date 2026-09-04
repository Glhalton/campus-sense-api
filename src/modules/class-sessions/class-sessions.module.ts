import { Module } from '@nestjs/common';
import { ClassSessionsService } from './class-sessions.service.js';
import { ClassSessionsController } from './class-sessions.controller.js';

@Module({
  controllers: [ClassSessionsController],
  providers: [ClassSessionsService],
})
export class ClassSessionsModule {}
