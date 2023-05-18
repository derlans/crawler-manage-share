import {
  Body,
  Controller,
  Get,
  HttpException,
  Post,
  Req,
  Request,
} from '@nestjs/common'
import { LogService } from './log.service'
import { CrawlerService } from '../crawler/crawler.service'
@Controller('log')
export class LogController {
  constructor(
    private readonly logService: LogService,
    private readonly crawlerService: CrawlerService,
  ) {}
  @Post('list')
  async list(@Req() req: Request, @Body() body: any) {
    const userid = req['user']._id
    const options = {
      ...body,
      query: body.query || {},
    }
    options.query.owner = userid
    return {
      data: await this.logService.find(options),
    }
  }
  @Post('create')
  async create(@Body() body: any, @Req() req: Request) {
    const userid = req['user']._id
    const logid = await this.logService.create(userid, body)
    return {
      data: logid,
    }
  }
  @Post('detail')
  async detail(@Body() body: any, @Req() req: Request) {
    const userid = req['user']._id
    const log = await this.logService.findOneById(body._id)
    if (log.owner.toString() !== userid.toString()) {
      throw new HttpException('没有权限', 403)
    }
    return {
      data: log,
    }
  }
  @Post('notify')
  async notify(@Body() body: any) {
    const _id = body._id
    const result = body.result
    console.log('notify', _id, result)
    await this.logService.notify(_id, result)
    return {
      data: null,
    }
  }
}
