import { Module, forwardRef } from '@nestjs/common'
import { LogService } from './log.service'

import { MongooseModule } from '@nestjs/mongoose'
import { CrawlerRunLogSchema } from '@/schemas/crawler.schema'
import { LogController } from './log.controller'
import { CrawlerModule } from '../crawler/crawler.module'
import { FileModule } from '../file/file.module'
import { TaskSchedulerModule } from '../task-scheduler/task-scheduler.module'
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'CrawlerRunLog', schema: CrawlerRunLogSchema },
    ]),
    forwardRef(() => TaskSchedulerModule),
    CrawlerModule,
    FileModule,
  ],
  controllers: [LogController],
  providers: [LogService],
  exports: [LogService],
})
export class LogModule {}
