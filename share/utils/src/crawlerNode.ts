export interface CrawlerNode {
  name: string
  url: string
  type: 'master' | 'slave'
  status: 'online' | 'offline' | 'unknown' | 'error'
  weight: number
  description: string
  tags: string[]
  proxyLanguage: 'javascript' | 'python'
  // 监控地址
  monitorUrl?: string
  // 系统信息
  systemInfo?: {
    cpuUsage: number
    memoryUsage: number
    processCpuUsage: number
  }
}
