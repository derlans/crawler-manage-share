import { Injectable } from '@nestjs/common'
import { CrawlerRunLog } from '@/schemas/crawler.schema'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { CrawlerService } from '../crawler/crawler.service'
import { FileService } from '../file/file.service'
@Injectable()
export class LogService {
  constructor(
    @InjectModel(CrawlerRunLog.name)
    private readonly crawlerRunLog: Model<CrawlerRunLog>,
    private readonly crawlerService: CrawlerService,
    private readonly fileService: FileService,
  ) {}
  async logList(userid: string) {
    return await this.crawlerRunLog.find({ owner: userid })
  }
  async create(userid: string, body: any) {
    const crawlerRun = await this.crawlerService.findOneById(body.crawlerRun)
    await this.crawlerService.updateOneById(body.crawlerRun, {
      runCount: crawlerRun.runCount + 1,
      lastRunAt: new Date(),
    })
    const log = await this.crawlerRunLog.create({
      owner: userid,
      crawlerRun: body.crawlerRun,
      name: crawlerRun.name,
    })
    this.crawlerService.runCrawler(crawlerRun).then(async (res) => {
      const [result, crawler] = res
      console.log('运行完成')
      await this.crawlerRunLog.findByIdAndUpdate(log._id, {
        status: 2,
        endTime: new Date(),
        resultCount: crawler.resultCount(),
        successCount: crawler.successCount(),
        failCount: crawler.failCount(),
        resultSize: crawler.resultSize(),
      })
      await this.fileService.saveJson(log._id, result)
      console.log('数据更新完成')
    })
    return log
  }
  async findOneById(id: string) {
    return await this.crawlerRunLog.findById(id)
  }
}
