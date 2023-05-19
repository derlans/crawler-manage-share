import { Module, forwardRef } from '@nestjs/common'
import { TaskSchedulerController } from './task-scheduler.controller'
import { TaskSchedulerService } from './task-scheduler.service'
import { MongooseModule } from '@nestjs/mongoose'
import { CronTaskSchema } from '@/schemas/cronTask.shcema'
import { LogModule } from '../log/log.module'
import { ScheduleModule } from '@nestjs/schedule'
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'CronTask', schema: CronTaskSchema }]),
    ScheduleModule.forRoot(),
    forwardRef(() => LogModule),
  ],
  controllers: [TaskSchedulerController],
  providers: [TaskSchedulerService],
  exports: [TaskSchedulerService],
})
export class TaskSchedulerModule {}
