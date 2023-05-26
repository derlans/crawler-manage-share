import { CrawlerNode } from '@crawler-manage-share/utils'

export const crawlerNodes: CrawlerNode[] = [
  {
    // 节点名称
    name: '主节点',
    // 节点地址
    url: 'http://localhost:3000/api',
    // 节点类型
    type: 'master',
    // 节点状态
    status: 'online',
    // 节点权重
    weight: 1,
    // 节点描述
    description:
      '后端主节点、负责整个系统的爬虫调度、数据存储、数据分析、数据处理等',
    // 节点标签
    tags: ['master', 'javascript'],
    // 节点代理语言
    proxyLanguage: 'javascript',
    monitorUrl: 'http://localhost:3000/api/status',
  },
  {
    name: 'python代理节点',
    description: '负责代理python爬虫的执行',
    proxyLanguage: 'python',
    status: 'online',
    tags: ['python', 'slave'],
    type: 'slave',
    url: 'http://localhost:5000',
    weight: 1,
  },
]
