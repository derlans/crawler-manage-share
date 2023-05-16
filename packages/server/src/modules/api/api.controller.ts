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
}
