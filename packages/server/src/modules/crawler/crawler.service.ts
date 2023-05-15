import { Injectable } from '@nestjs/common'
import { CrawlerRun, CrawlerRunDoc } from '@/schemas/crawler.schema'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Crawler } from '@crawler-manage-share/utils'
import axios from 'axios'
import { lastDay, lastMonth, lastWeek } from '@/utils/time'
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
    return await this.crawlerRunModel.create({ ...v, owner: userid })
  }
  async findOneById(id: string) {
    return await this.crawlerRunModel.findById(id)
  }
  async updateOneById(id: string, v: any) {
    return await this.crawlerRunModel.findByIdAndUpdate(id, v)
  }
  async runCrawler(crawlerRun: CrawlerRunDoc): Promise<[any, Crawler]> {
    const { crawler: crawlerSchema, runOptions } = crawlerRun
    const crawler = new Crawler(crawlerSchema.fn, { envParams: { axios } })
    const result = await crawler.run(runOptions)
    return [result, crawler]
  }
  async count(userid: string) {
    const totalCount = await this.crawlerRunModel.countDocuments({
      owner: userid,
    })
    const lastDayCount = await this.crawlerRunModel.countDocuments({
      owner: userid,
      createdAt: {
        $gte: lastDay(),
      },
    })
    const lastWeekCount = await this.crawlerRunModel.countDocuments({
      owner: userid,
      createdAt: {
        $gte: lastWeek(),
      },
    })
    const lastMonthCount = await this.crawlerRunModel.countDocuments({
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
