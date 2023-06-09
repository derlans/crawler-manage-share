import { FnString } from './is'
import { AxiosStatic } from 'axios'
import axios from 'axios'
import cloneDeep from 'lodash-es/cloneDeep'
export interface EnvParams {
  axios: AxiosStatic
}
export type UserParams = Record<string, any>
export interface RunOptions {
  // 所有的用户参数
  allUserParams: UserParams[]
  // 并发数
  concurrency: number
  // 超时时间
  timeout?: number
  // 重试次数
  retry?: number
}
export interface CrawlerResult {
  data: any
  isSuccess: boolean
  code: number
  msg: string
  date: number
  userParams: UserParams
  executionTime: number
}
export class Crawler {
  fnString: FnString
  fn: Function
  userParamsSchema: string
  envParams: Partial<EnvParams>
  result: CrawlerResult[]
  constructor(
    rawFn: FnString,
    crawlerOptions?: { envParams: Partial<EnvParams> },
  ) {
    crawlerOptions = crawlerOptions || { envParams: { axios: axios } }
    this.fnString = rawFn
    this.fn = turnFnStringToFn(rawFn)
    this.userParamsSchema = JSON.stringify({})
    this.result = []
    this.envParams = crawlerOptions.envParams
  }
  runOne(userParams: UserParams, timeout = 10000): Promise<CrawlerResult> {
    const now = Date.now()
    return new Promise((resolve) => {
      const time = setTimeout(() => {
        resolve({
          data: null,
          code: 1,
          msg: 'timeout',
          isSuccess: false,
          date: new Date().getTime(),
          userParams,
          executionTime: timeout,
        })
      }, timeout)
      this.fn(this.envParams, userParams)
        .then((res) => {
          clearTimeout(time)
          resolve({
            data: res,
            code: 0,
            msg: 'success',
            isSuccess: true,
            date: new Date().getTime(),
            userParams,
            executionTime: Date.now() - now,
          })
        })
        .catch((error) => {
          clearTimeout(time)
          resolve({
            data: error,
            code: error?.code || 1,
            msg: error?.message || 'error',
            isSuccess: false,
            date: new Date().getTime(),
            userParams,
            executionTime: Date.now() - now,
          })
        })
    })
  }
  async run(runOptions: RunOptions, onProgress?: (v: CrawlerResult[]) => void) {
    const res: CrawlerResult[] = []
    const { allUserParams = [], concurrency = 1 } = runOptions
    for (let i = 0; i < allUserParams.length; i = i + concurrency) {
      const v = await Promise.all(
        allUserParams.slice(i, i + concurrency).map((params) => {
          return this.runOne(cloneDeep(params), runOptions.timeout)
        }),
      )
      onProgress && onProgress(v)
      res.push(...v)
    }
    this.result.push(...res)
    return res
  }
  resultCount() {
    return this.result.length
  }
  successCount() {
    return this.result.filter((v) => v.isSuccess).length
  }
  failCount() {
    return this.result.filter((v) => !v.isSuccess).length
  }
  resultSize() {
    return JSON.stringify(this.result).length
  }
}

export const turnFnStringToFn = (fnString: FnString): Function => {
  return Function(`return ${fnString}`)()
}

// 生成参数
export interface GenerateParamsOpations {
  params1: Record<string, any>[]
  params2: Record<string, any>[]
  commonParams: Record<string, any>
}

export const generateParams = (v: GenerateParamsOpations) => {
  const { params1, params2, commonParams } = v
  // Params1 * Params2 笛卡尔积
  const res: Record<string, any>[] = []
  for (let i = 0; i < params1.length; i++) {
    for (let j = 0; j < params2.length; j++) {
      res.push({
        ...commonParams,
        ...params1[i],
        ...params2[j],
      })
    }
  }
  return res
}

export const generateParamsByRange = (
  rawParams: Record<string, any>,
  range: {
    start: number
    end: number
  },
) => {
  const { start, end } = range
  const res: Record<string, any>[] = []
  for (let i = start; i <= end; i++) {
    const params = cloneDeep(rawParams)
    params.page = i
    res.push(params)
  }
  return res
}

export interface CrawlerSchema {
  name: string
  description: string
  code: string
  userParamsSchema: string
  // 语言 default javascript
  language: 'javascript' | 'python'
}

export const defaultCrawlerSchema: CrawlerSchema = {
  name: 'xx爬虫',
  description: '爬取xx网站的xx数据',
  code: `async function fn(env, user) {
    
}`,
  userParamsSchema: JSON.stringify(
    {
      title: '微博搜索',
      description: 'A simple form example.',
      type: 'object',
      required: ['q'],
      properties: {
        q: {
          type: 'string',
          title: '查询的字段',
        },
      },
    },
    null,
    2,
  ),
  language: 'javascript',
}

export const defaultCrawlerSchemaPython: CrawlerSchema = {
  name: 'xx爬虫',
  description: '爬取xx网站的xx数据',
  code: `# encoding:utf-8
import requests
import re
def deepSearchJSON(jsonObj, key):
    results = []
    def search(obj):
        for prop in obj:
            if prop == key:
                results.append(re.sub('[^\u4e00-\u9fa5]', '', str(obj[prop])))
            elif isinstance(obj[prop], dict):
                search(obj[prop])
            elif isinstance(obj[prop], list):
                for item in obj[prop]:
                    if isinstance(item, dict):
                        search(item)
    search(jsonObj)
    return results

def fn(q, page):
    url = 'https://m.weibo.cn/api/container/getIndex'
    params = {
        'containerid': '100103type=1&q=' + q,
        'page_type': 'searchall',
        'page': page
    }

    response = requests.get(url, params=params)
    response_json = response.json()
    return  deepSearchJSON(response_json['data'], 'text')

# 调用爬虫函数
data = fn(params.get('q'),params.get('page'))
  `,
  userParamsSchema: JSON.stringify(
    {
      title: '微博搜索',
      description: 'A simple form example.',
      type: 'object',
      required: ['q'],
      properties: {
        q: {
          type: 'string',
          title: '查询的字段',
        },
      },
    },
    null,
    2,
  ),
  language: 'python',
}

export const defaultCrawlerSchemaMap = {
  javascript: defaultCrawlerSchema,
  python: defaultCrawlerSchemaPython,
}
