import { Body, Controller, Get, Post, Req } from '@nestjs/common'
import { ProjectService } from './project.service'
import { CreateProjectDto } from '@/dto/project.dto'
@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}
  @Post('list')
  async projectList() {
    return await this.projectService.projectList()
  }
  @Post('create')
  async createProject(@Body() project: CreateProjectDto) {
    return await this.projectService.createProject(project)
  }
}
