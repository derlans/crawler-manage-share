import { Body, Controller, Get, Post, Query, Req } from '@nestjs/common'
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
  @Post('system')
  async system() {
    return {
      data: await this.appService.systemInfo(),
    }
  }
  @Post('jieba')
  async jieba(@Body() body) {
    const { text } = body
    return {
      data: await this.appService.jieba(text),
    }
  }
}
