import { Injectable } from '@nestjs/common'
import { Project } from '../../schemas/project'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
@Injectable()
export class ProjectService {
  constructor(
    @InjectModel(Project.name)
    private readonly projectModel: Model<Project>,
  ) {}
  async projectList() {
    return await this.projectModel.find()
  }
}
