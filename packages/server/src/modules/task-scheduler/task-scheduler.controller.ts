import { Body, Controller, Post, Req, Request } from '@nestjs/common'
import { TaskSchedulerService } from './task-scheduler.service'

@Controller('cron')
export class TaskSchedulerController {
  constructor(private readonly taskSchedulerService: TaskSchedulerService) {}
  @Post('create')
  async create(@Body() body: any, @Req() req: Request) {
    const userid = req['user']._id
    await this.taskSchedulerService.createCronJob({
      ...body,
      owner: userid,
    })
    return {
      data: null,
    }
  }
  @Post('list')
  async list(@Req() req: Request, @Body() body: any) {
    const userid = req['user']._id
    const options = {
      ...body,
      query: body.query || {},
    }
    options.query.owner = userid
    return {
      data: await this.taskSchedulerService.find(options),
    }
  }
  @Post('stop')
  async stop(@Req() req: Request, @Body() body: any) {
    const userid = req['user']._id
    const _id = body._id
    await this.taskSchedulerService.stopCronJob(_id)
    return {
      data: null,
    }
  }
  @Post('start')
  async start(@Req() req: Request, @Body() body: any) {
    const userid = req['user']._id
    const _id = body._id
    await this.taskSchedulerService.startCronJob(_id)
    return {
      data: null,
    }
  }
}
