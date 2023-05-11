import { Injectable } from '@nestjs/common'
import { CrawlerRun } from '@/schemas/crawler.schema'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
@Injectable()
export class CrawlerService {
  constructor(
    @InjectModel(CrawlerRun.name)
    private readonly crawlerRunModel: Model<CrawlerRun>,
  ) {}
  async crawlerList(userid: string) {
    return await this.crawlerRunModel.find({ owner: userid })
  }
  async createCrawler(v: any, userid: string) {
    console.log({ ...v, owner: userid })
    return await this.crawlerRunModel.create({ ...v, owner: userid })
  }
}
