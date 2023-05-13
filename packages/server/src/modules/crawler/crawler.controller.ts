import { Body, Controller, Get, Post, Req, Request } from '@nestjs/common'
import { CrawlerService } from './crawler.service'
@Controller('crawler')
export class CrawlerController {
  constructor(private readonly crawlerService: CrawlerService) {}
  @Post('list')
  async list(@Req() req: Request) {
    const userid = req['user']._id
    return {
      data: await this.crawlerService.crawlerList(userid),
    }
  }
  @Post('create')
  async project(@Body() body: any, @Req() req: Request) {
    const userid = req['user']._id
    return {
      data: (await this.crawlerService.createCrawler(body, userid))['_id'],
    }
  }
}