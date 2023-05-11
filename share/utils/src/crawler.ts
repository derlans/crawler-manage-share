import { FnString } from './is'
import { AxiosStatic } from 'axios'
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
    crawlerOptions = crawlerOptions || { envParams: {} }
    this.fnString = rawFn
    this.fn = turnFnStringToFn(rawFn)
    this.userParamsSchema = JSON.stringify({})
    this.result = []
    this.envParams = crawlerOptions.envParams
  }
  runOne(userParams: UserParams, timeout = 10000): Promise<CrawlerResult> {
    return new Promise((resolve) => {
      const time = setTimeout(() => {
        resolve({
          data: null,
          code: 1,
          msg: 'timeout',
          isSuccess: false,
          date: new Date().getTime(),
          userParams,
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
          })
        })
    })
  }
  async run(runOptions: RunOptions) {
    const res: CrawlerResult[] = []
    const { allUserParams = [], concurrency = 1 } = runOptions
    for (let i = 0; i < allUserParams.length; i = i + concurrency) {
      const v = await Promise.all(
        allUserParams.slice(i, i + concurrency).map((params) => {
          return this.runOne(cloneDeep(params), runOptions.timeout)
        }),
      )
      res.push(...v)
    }
    this.result.push(...res)
    return res
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
  fn: FnString
  userParamsSchema: string
}

export const defaultCrawlerSchema: CrawlerSchema = {
  name: 'xx爬虫',
  description: '爬取xx网站的xx数据',
  fn: `async function fn(env, user) {
    
}` as FnString,
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
}
