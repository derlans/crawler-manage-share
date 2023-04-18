import { Controller, Get } from '@nestjs/common'
import { ProjectService } from './project.service'
@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}
  @Get('list')
  async projectList() {
    return await this.projectService.projectList()
  }
}
