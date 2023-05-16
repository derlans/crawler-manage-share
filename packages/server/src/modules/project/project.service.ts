import { Injectable } from '@nestjs/common'
import { Project } from '../../schemas/project.schema'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { CreateProjectDto } from '@/dto/project.dto'
import { lastDay, lastMonth, lastWeek } from '@/utils/time'
import { FindOptions, commonFind } from '@/utils/model'
@Injectable()
export class ProjectService {
  constructor(
    @InjectModel(Project.name)
    private readonly projectModel: Model<Project>,
  ) {}
  async projectList() {
    return await this.projectModel.find()
  }
  // 查找，支持分页
  async find(findOptions: FindOptions) {
    return await commonFind(this.projectModel, findOptions, [
      'name',
      'description',
    ])
  }
  async createProject(project: CreateProjectDto, userid: string) {
    return await this.projectModel.create({ ...project, owner: userid })
  }
  async projectDetail(_id: string) {
    return await this.projectModel.findById(_id)
  }
  async updateProject(_id: string, rest: any) {
    return await this.projectModel.findByIdAndUpdate(_id, rest)
  }
  async count(userid: string) {
    const totalCount = await this.projectModel.countDocuments({
      owner: userid,
    })
    const lastDayCount = await this.projectModel.countDocuments({
      owner: userid,
      createdAt: {
        $gte: lastDay(),
      },
    })
    const lastWeekCount = await this.projectModel.countDocuments({
      owner: userid,
      createdAt: {
        $gte: lastWeek(),
      },
    })
    const lastMonthCount = await this.projectModel.countDocuments({
      owner: userid,
      createdAt: {
        $gte: lastMonth(),
      },
    })

    return {
      totalCount,
      lastDayCount,
      lastWeekCount,
      lastMonthCount,
    }
  }
}
