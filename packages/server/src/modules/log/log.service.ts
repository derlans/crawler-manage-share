import { Inject, Injectable, forwardRef } from '@nestjs/common'
import { CrawlerRunLog } from '@/schemas/crawler.schema'
import { InjectModel } from '@nestjs/mongoose'
import { Model, Types } from 'mongoose'
import { CrawlerService } from '../crawler/crawler.service'
import { FileService } from '../file/file.service'
import {
  lastDay,
  lastMonth,
  lastWeek,
  now,
  today,
  tomorrow,
} from '@/utils/time'
import { FindOptions, commonFind } from '@/utils/model'
import { TaskSchedulerService } from '../task-scheduler/task-scheduler.service'
@Injectable()
export class LogService {
  constructor(
    @InjectModel(CrawlerRunLog.name)
    private readonly crawlerRunLog: Model<CrawlerRunLog>,
    private readonly crawlerService: CrawlerService,
    private readonly fileService: FileService,
    @Inject(forwardRef(() => TaskSchedulerService))
    private readonly taskSchedulerService: TaskSchedulerService,
  ) {}
  async logList(userid: string) {
    return await this.crawlerRunLog.find({ owner: userid })
  }
  // 查找，支持分页,支持name模糊查询,支持时间范围查询
  async find(findOptions: FindOptions) {
    const res = await commonFind(this.crawlerRunLog, findOptions, [
      'name',
      'description',
      'status',
    ])
    return res
  }
  async create(userid: Types.ObjectId, crawlerRunid: string) {
    const crawlerRun = await this.crawlerService.findOneById(crawlerRunid)
    await this.crawlerService.updateOneById(crawlerRunid, {
      runCount: crawlerRun.runCount + 1,
      lastRunAt: new Date(),
    })
    const log = await this.crawlerRunLog.create({
      owner: userid,
      crawlerRun: crawlerRunid,
      name: crawlerRun.name,
    })
    if (crawlerRun.crawler.language === 'python') {
      this.crawlerService.runPythonCrawler(log._id, crawlerRun).catch(() => {})
    } else {
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
    }

    return log
  }
  async delete(id: string) {
    await this.crawlerRunLog.findByIdAndDelete(id)
  }
  async findOneById(id: string) {
    return await this.crawlerRunLog.findById(id)
  }
  async count(userid: string) {
    const totalCount = await this.crawlerRunLog.countDocuments({})
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
      countByDayLastMonth: await this.countByDay(
        userid,
        lastMonth(),
        tomorrow(),
      ),
      resultCountLastDay: await this.resultCount(userid, lastDay(), tomorrow()),
      resultCountLastWeek: await this.resultCount(
        userid,
        lastWeek(),
        tomorrow(),
      ),
      resultCountLastMonth: await this.resultCount(
        userid,
        lastMonth(),
        tomorrow(),
      ),
    }
  }
  async resultCount(userid: string, startTime: Date, endTime: Date) {
    const data = await this.crawlerRunLog.aggregate([
      {
        $match: {
          owner: userid,
          createdAt: { $gte: startTime, $lte: endTime },
        },
      },
      {
        $group: {
          _id: null,
          count: { $sum: '$resultCount' },
          failCount: { $sum: '$failCount' },
          successCount: { $sum: '$successCount' },
        },
      },
    ])
    return data.length > 0
      ? data[0]
      : { count: 0, failCount: 0, successCount: 0 }
  }
  async resultCountByName(userid: string) {
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
        },
      },
    ])
  }
  async resultSizeCountByName(userid: string) {
    return await this.crawlerRunLog.aggregate([
      {
        $match: {
          owner: userid,
        },
      },
      {
        $group: {
          _id: '$name',
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
            $dateToString: {
              format: '%Y-%m-%d',
              date: '$createdAt',
              timezone: 'Asia/Shanghai',
            },
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
          resultSizeCount: { $sum: '$resultSize' },
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
  async notify(logid: string, result: any[]) {
    await this.crawlerRunLog.findByIdAndUpdate(logid, {
      status: 2,
      endTime: new Date(),
      resultCount: result.length,
      successCount: result.filter((item) => item.isSuccess).length,
      failCount: result.filter((item) => !item.isSuccess).length,
      resultSize: JSON.stringify(result).length,
    })
    await this.fileService.saveJson(logid, result)
  }
  async findByCronid(cronid: string) {
    const cron = await this.taskSchedulerService.findByid(cronid)
    if (!cron) {
      return []
    }
    const result = await Promise.all(
      cron.logList.map((item) => {
        return this.crawlerRunLog.findById(item).exec()
      }),
    )
    return {
      list: result.reverse(),
      total: result.length,
      pageCount: 1,
    }
  }
}
