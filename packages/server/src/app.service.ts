import { Injectable } from '@nestjs/common'
import { ProjectService } from './modules/project/project.service'
import { CrawlerService } from './modules/crawler/crawler.service'
import { LogService } from './modules/log/log.service'

@Injectable()
export class AppService {
  constructor(
    private readonly projectService: ProjectService,
    private readonly crawlerService: CrawlerService,
    private readonly logService: LogService,
  ) {}
  // 首页仪表盘 统计项目总数，爬虫总数，任务总数，进行中的任务，失败任务，成功任务，结果总数,一个月内的统计数据
  async console(userid: string) {
    const projectCount = await this.projectService.count(userid)
    const crawlerCount = await this.crawlerService.count(userid)
    const logCount = await this.logService.count(userid)
    const resultCount = await this.logService.resultCount(userid)
    const resultSizeCount = await this.logService.resultSizeCount(userid)
    return {
      projectCount,
      crawlerCount,
      logCount,
      resultCount,
      resultSizeCount,
    }
  }
}
