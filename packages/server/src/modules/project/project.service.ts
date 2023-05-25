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
  async projectDetail(projectid: string) {
    return await this.projectModel.findById(projectid)
  }
  async updateProject(projectid: string, rest: any) {
    await this.projectModel.updateOne({ _id: projectid }, rest)
  }
  async updateOne(query: any, update: any) {
    await this.projectModel.updateOne(query, update)
  }
  async deleteOne(query: any) {
    await this.projectModel.deleteOne(query)
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
