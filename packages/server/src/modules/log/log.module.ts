import { Module } from '@nestjs/common'
import { LogService } from './log.service'

import { MongooseModule } from '@nestjs/mongoose'
import { CrawlerRunLogSchema } from '@/schemas/crawler.schema'
import { LogController } from './log.controller'
import { CrawlerModule } from '../crawler/crawler.module'
import { FileModule } from '../file/file.module'
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'CrawlerRunLog', schema: CrawlerRunLogSchema },
    ]),
    CrawlerModule,
    FileModule,
  ],
  controllers: [LogController],
  providers: [LogService],
})
export class LogModule {}
