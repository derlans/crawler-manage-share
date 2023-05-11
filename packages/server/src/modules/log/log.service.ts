import { Injectable } from '@nestjs/common'
import { CrawlerRunLog } from '@/schemas/crawler.schema'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
@Injectable()
export class LogService {
  constructor(
    @InjectModel(CrawlerRunLog.name)
    private readonly crawlerRunLog: Model<CrawlerRunLog>,
  ) {}
  async logList(userid: string) {
    return await this.crawlerRunLog.find({ owner: userid })
  }
  async createLog(v: any, userid: string) {
    console.log({ ...v, owner: userid })
    return await this.crawlerRunLog.create({ ...v, owner: userid })
  }
}
