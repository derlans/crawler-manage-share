import { Module } from '@nestjs/common'
import { LogService } from './log.service'

import { MongooseModule } from '@nestjs/mongoose'
import { CrawlerRunLogSchema } from '@/schemas/crawler.schema'
import { LogController } from './log.controller'
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'CrawlerRunLog', schema: CrawlerRunLogSchema },
    ]),
  ],
  controllers: [LogController],
  providers: [LogService],
})
export class LogModule {}
