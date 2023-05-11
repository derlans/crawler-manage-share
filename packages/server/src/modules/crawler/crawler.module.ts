import { Module } from '@nestjs/common'
import { CrawlerService } from './crawler.service'

import { MongooseModule } from '@nestjs/mongoose'
import { CrawlerRunSchema } from '@/schemas/crawler.schema'
import { CrawlerController } from './crawler.controller'
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'CrawlerRun', schema: CrawlerRunSchema },
    ]),
  ],
  controllers: [CrawlerController],
  providers: [CrawlerService],
})
export class CrawlerModule {}
