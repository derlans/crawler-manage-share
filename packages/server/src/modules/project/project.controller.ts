import { Body, Controller, Get, Post, Req, Request } from '@nestjs/common'
import { ProjectService } from './project.service'
import { CreateProjectDto } from '@/dto/project.dto'
import { UserDoc } from '@/schemas/user.schema'
@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}
  @Post('list')
  async projectList() {
    return {
      data: { list: await this.projectService.projectList() },
    }
  }
  @Post('create')
  async createProject(@Body() project: CreateProjectDto, @Request() req) {
    const user = req.user as UserDoc
    return await this.projectService.createProject(project, user._id)
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
    return {
      data: await this.projectService.updateProject(_id, rest),
    }
  }
}
