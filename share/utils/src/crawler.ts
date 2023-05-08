import { FnString } from './is'
import { AxiosStatic } from 'axios'
import cloneDeep from 'lodash-es/cloneDeep'
export interface EnvParams {
  axios: AxiosStatic
}
export type UserParams = Record<string, any>
export interface RunOpations {
  // 所有的用户参数
  allUserParams: UserParams[]
  // 并发数
  concurrency: number
  // 超时时间
  timeout?: number
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
  userParamsSchema: Record<string, any>
  envParams: Partial<EnvParams>
  result: CrawlerResult[]
  constructor(
    rawFn: FnString,
    crawlerOpations?: { envParams: Partial<EnvParams> },
  ) {
    crawlerOpations = crawlerOpations || { envParams: {} }
    this.fnString = rawFn
    this.fn = turnFnStringToFn(rawFn)
    this.userParamsSchema = {}
    this.result = []
    this.envParams = crawlerOpations.envParams
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
  async run(runOpations: RunOpations) {
    const res: CrawlerResult[] = []
    const { allUserParams = [], concurrency = 1 } = runOpations
    for (let i = 0; i < allUserParams.length; i = i + concurrency) {
      const v = await Promise.all(
        allUserParams.slice(i, i + concurrency).map((params) => {
          return this.runOne(cloneDeep(params), runOpations.timeout)
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
  rawParams: Record<string, any>
  range: {
    start: number
    end: number
  }
}
export const generateParams = (opations: GenerateParamsOpations) => {
  const { rawParams, range } = opations
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
  userParamsSchema: Record<string, any>
}
