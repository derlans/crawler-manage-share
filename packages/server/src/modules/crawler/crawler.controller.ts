import {
  Body,
  Controller,
  Get,
  HttpException,
  Post,
  Req,
  Request,
} from '@nestjs/common'
import { CrawlerService } from './crawler.service'
@Controller('crawler')
export class CrawlerController {
  constructor(private readonly crawlerService: CrawlerService) {}
  @Post('list')
  async list(@Req() req: Request, @Body() body: any) {
    const userid = req['user']._id
    const options = {
      ...body,
      query: body.query || {},
    }
    options.query.owner = userid
    return {
      data: await this.crawlerService.find(options),
    }
  }
  @Post('create')
  async project(@Body() body: any, @Req() req: Request) {
    const userid = req['user']._id
    return {
      data: (await this.crawlerService.createCrawler(body, userid))['_id'],
    }
  }
  @Post('testRun')
  async testRun(@Body() body: any) {
    return {
      data: await this.crawlerService.testRun(body),
    }
  }
  @Post('delete')
  async delete(@Body() body: any, @Req() req: Request) {
    const userid = req['user']._id
    const _id = body._id
    const crawler = await this.crawlerService.findOneById(_id)
    if (crawler.owner.toString() !== userid.toString()) {
      throw new HttpException('没有权限', 403)
    }
    await this.crawlerService.deleteOneById(_id)
  }
}
