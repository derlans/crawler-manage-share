import { Controller, Post } from '@nestjs/common'
import { CrawlerNodeService } from './crawler-node.service'

@Controller('crawler-node')
export class CrawlerNodeController {
  constructor(private readonly crawlerNodeService: CrawlerNodeService) {}
  @Post('list')
  async find() {
    return {
      data: await this.crawlerNodeService.find(),
    }
  }
}
