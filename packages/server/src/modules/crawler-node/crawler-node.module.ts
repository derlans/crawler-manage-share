import { Module } from '@nestjs/common';
import { CrawlerNodeController } from './crawler-node.controller';
import { CrawlerNodeService } from './crawler-node.service';

@Module({
  controllers: [CrawlerNodeController],
  providers: [CrawlerNodeService]
})
export class CrawlerNodeModule {}
