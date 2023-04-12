import { FnString } from './is'
import { AxiosStatic } from 'axios'
export interface envParams {
  axios: AxiosStatic
}
export type UserParams = Record<string, any>
export interface RunOpations {
  allUserParams: UserParams[]
  concurrency: number
}
export class Crawler {
  fnString: FnString
  fn: Function
  userParamsSchema: Record<string, any>
  constructor(rawFn: FnString) {
    this.fnString = rawFn
    this.fn = turnFnStringToFn(rawFn)
  }
  runOne(userParams: UserParams) {
    try {
      return this.fn({}, userParams)
    } catch (error) {}
  }
  async run(runOpations: RunOpations) {
    const res: any[] = []
    const { allUserParams = [], concurrency = 1 } = runOpations
    for (let i = 0; i < allUserParams.length; i = i + concurrency) {
      const v = await Promise.all(
        allUserParams.slice(i, i + concurrency).map((params) => {
          return this.runOne(params)
        }),
      )
      res.push(...v)
    }
    return res
  }
}

export const turnFnStringToFn = (fnString: FnString): Function => {
  return Function(`return ${fnString}`)()
}
export const createCrawler = () => {}
