import { Body, Controller, Get, Post, Req, Request } from '@nestjs/common'
import { LogService } from './log.service'
@Controller('log')
export class LogController {
  constructor(private readonly logService: LogService) {}
  @Post('list')
  async list(@Req() req: Request) {
    const userid = req['user']._id
    return {
      data: await this.logService.logList(userid),
    }
  }
  @Post('create')
  async create(@Body() body: any, @Req() req: Request) {
    const userid = req['user']._id
    return {
      data: (await this.logService.createLog(body, userid))['_id'],
    }
  }
}
