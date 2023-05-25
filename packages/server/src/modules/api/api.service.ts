import { Api } from '@/schemas/api.schema'
import { FindOptions, commonFind } from '@/utils/model'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

@Injectable()
export class ApiService {
  constructor(
    @InjectModel(Api.name)
    private readonly apiModel: Model<Api>,
  ) {}
  async create(api: Api): Promise<Api> {
    return await this.apiModel.create(api)
  }
  // 查找，支持分页
  async find(findOptions: FindOptions) {
    return await commonFind(this.apiModel, findOptions)
  }
  async findOne(query: any) {
    return await this.apiModel.findOne(query)
  }
  async findOneAndUpdate(query: any, update: any) {
    return await this.apiModel.findOneAndUpdate(query, update)
  }
  async updateOne(query: any, update: any) {
    await this.apiModel.updateOne(query, update)
  }
}
