import { Injectable } from '@nestjs/common'
import { ProjectService } from './modules/project/project.service'
import { CrawlerService } from './modules/crawler/crawler.service'
import { LogService } from './modules/log/log.service'
import { getSystemInfo } from './utils/system'
const jieba = require('nodejieba')
@Injectable()
export class AppService {
  constructor(
    private readonly projectService: ProjectService,
    private readonly crawlerService: CrawlerService,
    private readonly logService: LogService,
  ) {}
  // 首页仪表盘 统计项目总数，爬虫总数，任务总数，进行中的任务，失败任务，成功任务，结果总数,一个月内的统计数据
  async console(userid: string) {
    const project = await this.projectService.count(userid)
    const crawler = await this.crawlerService.count(userid)
    const log = await this.logService.count(userid)
    return {
      project: project,
      crawler: crawler,
      log: log,
    }
  }
  async systemInfo() {
    return getSystemInfo()
  }
  async jieba(text = '') {
    return jieba.extract(text, 1000)
  }
}
