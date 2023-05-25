import { Body, Controller, Post, Req, Request } from '@nestjs/common'
import { ApiService } from './api.service'

@Controller('api')
export class ApiController {
  constructor(private readonly apiService: ApiService) {}
  @Post('list')
  async list(@Req() req: Request, @Body() body: any) {
    const userid = req['user']._id
    const options = {
      ...body,
      query: body.query || {},
    }
    options.query.owner = userid
    return {
      data: await this.apiService.find(options),
    }
  }
  @Post('create')
  async create(@Req() req: Request, @Body() body: any) {
    const userid = req['user']._id
    const options = {
      ...body,
      owner: userid,
    }
    return {
      data: await this.apiService.create(options),
    }
  }
  @Post('detail')
  async detail(@Req() req: Request, @Body() body: any) {
    const userid = req['user']._id
    const _id = body._id
    return {
      data: await this.apiService.findOne({ _id, owner: userid }),
    }
  }
  @Post('update')
  async update(@Req() req: Request, @Body() body: any) {
    const userid = req['user']._id
    const _id = body._id
    await this.apiService.updateOne({ _id, owner: userid }, body)
  }
}
