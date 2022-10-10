import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TraceableTaskEntity } from './traceable-task.entity';
import { PersonalTaskController } from './personal-task.controller';
import { PersonalTaskService } from './personal-task.service';

@Module({
  imports: [TypeOrmModule.forFeature([TraceableTaskEntity])],
  controllers: [PersonalTaskController],
  providers: [PersonalTaskService],
  exports: [TypeOrmModule]
})
export class PersonalTaskModule {}
