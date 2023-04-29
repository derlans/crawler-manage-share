import { Injectable } from '@nestjs/common'
import { Project } from '../../schemas/project.schema'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { CreateProjectDto } from '@/dto/project.dto'
@Injectable()
export class ProjectService {
  constructor(
    @InjectModel(Project.name)
    private readonly projectModel: Model<Project>,
  ) {}
  async projectList() {
    return await this.projectModel.find()
  }
  async createProject(project: CreateProjectDto) {
    return await this.projectModel.create(project)
  }
}
