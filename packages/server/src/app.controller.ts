import { Controller, Get, Post, Query, Req } from '@nestjs/common'
import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Post('dashboard/console')
  async console(@Req() req) {
    const userid = req['user']._id
    return {
      data: await this.appService.console(userid),
    }
  }
}
