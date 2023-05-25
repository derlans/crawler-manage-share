import { Body, Controller, Get, Post, Req, Request } from '@nestjs/common'
import { ProjectService } from './project.service'
import { CreateProjectDto } from '@/dto/project.dto'
import { UserDoc } from '@/schemas/user.schema'
@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}
  @Post('list')
  async list(@Req() req: Request, @Body() body: any) {
    const userid = req['user']._id
    const options = {
      ...body,
      query: body.query || {},
    }
    options.query.owner = userid
    return {
      data: await this.projectService.find(options),
    }
  }
  @Post('create')
  async createProject(@Body() project: CreateProjectDto, @Request() req) {
    const user = req.user as UserDoc
    return {
      data: await this.projectService.createProject(project, user._id),
    }
  }
  @Post('detail')
  async projectDetail(@Body() body, @Request() req) {
    const { _id } = body
    return {
      data: await this.projectService.projectDetail(_id),
    }
  }
  @Post('update')
  async updateProject(@Body() body, @Request() req) {
    const { _id, ...rest } = body
    const userid = req['user']._id
    await this.projectService.updateOne({ _id, owner: userid }, rest)
  }
  @Post('delete')
  async deleteProject(@Body() body, @Request() req) {
    const { _id } = body
    const userid = req['user']._id
    await this.projectService.deleteOne({ _id, owner: userid })
  }
}
