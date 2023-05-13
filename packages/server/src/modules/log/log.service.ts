import { Injectable } from '@nestjs/common'
import { CrawlerRunLog } from '@/schemas/crawler.schema'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { CrawlerService } from '../crawler/crawler.service'
import { FileService } from '../file/file.service'
import { lastDay, lastMonth, lastWeek, now } from '@/utils/time'
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
      await this.crawlerRunLog.findByIdAndUpdate(log._id, {
        status: 2,
        endTime: new Date(),
        resultCount: crawler.resultCount(),
        successCount: crawler.successCount(),
        failCount: crawler.failCount(),
        resultSize: crawler.resultSize(),
      })
      await this.fileService.saveJson(log._id, result)
    })
    return log
  }
  async findOneById(id: string) {
    return await this.crawlerRunLog.findById(id)
  }
  async count(userid: string) {
    return {
      totalCount: await this.crawlerRunLog.countDocuments({ owner: userid }),
      lastDayCount: await this.crawlerRunLog.countDocuments({
        owner: userid,
        createdAt: {
          $gte: lastDay(),
        },
      }),
      lastWeekCount: await this.crawlerRunLog.countDocuments({
        owner: userid,
        createdAt: {
          $gte: lastWeek(),
        },
      }),
      lastMonthCount: await this.crawlerRunLog.countDocuments({
        owner: userid,
        createdAt: {
          $gte: lastMonth(),
        },
      }),
      successCount: await this.crawlerRunLog.countDocuments({
        owner: userid,
        status: 2,
      }),
      failCount: await this.crawlerRunLog.countDocuments({
        owner: userid,
        status: 3,
      }),
      countByName: await this.countByName(userid),
      countByStatus: await this.countByStatus(userid),
      countByDayLastMonth: await this.countByDay(userid, lastMonth(), now()),
    }
  }
  async resultCount(userid: string) {
    return await this.crawlerRunLog.aggregate([
      {
        $match: {
          owner: userid,
        },
      },
      {
        $group: {
          _id: '$type',
          count: { $sum: 1 },
        },
      },
    ])
  }
  async resultSizeCount(userid: string) {
    return await this.crawlerRunLog.aggregate([
      {
        $match: {
          owner: userid,
        },
      },
      {
        $group: {
          _id: '$type',
          count: { $sum: '$resultSize' },
        },
      },
    ])
  }
  // 统计每天的任务总数和结果总数
  async countByDay(userid: string, startTime: Date, endTime: Date) {
    return await this.crawlerRunLog.aggregate([
      {
        $match: {
          owner: userid,
          createdAt: { $gte: startTime, $lte: endTime },
        },
      },
      {
        $group: {
          _id: {
            $dateToString: { format: '%Y-%m-%d', date: '$createdAt' },
          },
          count: { $sum: 1 },
          resultCount: { $sum: '$resultCount' },
        },
      },
    ])
  }
  // 按照任务名字统计
  async countByName(userid: string) {
    return await this.crawlerRunLog.aggregate([
      {
        $match: {
          owner: userid,
        },
      },
      {
        $group: {
          _id: '$name',
          count: { $sum: 1 },
          resultCount: { $sum: '$resultCount' },
        },
      },
    ])
  }
  // 按照任务状态统计
  async countByStatus(userid: string) {
    return await this.crawlerRunLog.aggregate([
      {
        $match: {
          owner: userid,
        },
      },
      {
        $group: {
          _id: '$status',
          count: { $sum: 1 },
          resultCount: { $sum: '$resultCount' },
        },
      },
    ])
  }
}
