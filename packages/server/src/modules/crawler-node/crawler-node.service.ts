import { crawlerNodes } from '@/config/node'
import { CrawlerNode } from '@crawler-manage-share/utils'
import { Injectable } from '@nestjs/common'
import axios from 'axios'

@Injectable()
export class CrawlerNodeService {
  crawlerNodes: CrawlerNode[] = crawlerNodes
  constructor() {}
  async find() {
    const systemInfos = await this.systemInfos()
    console.log(systemInfos, this.crawlerNodes)
    return {
      list: this.crawlerNodes.map((node, index) => {
        return {
          ...node,
          systemInfo: systemInfos[index],
        }
      }),
      total: this.crawlerNodes.length,
      pageCount: 1,
    }
  }
  async systemInfos() {
    const systemInfos = await Promise.all(
      this.crawlerNodes.map(async (node) => {
        const res = await axios.post(`${node.url}/system`)
        return res.data.data
      }),
    )
    return systemInfos
  }
}
