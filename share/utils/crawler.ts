import { FnString } from './is'

export class Crawler {
  fnString: FnString
  fn: Function
  constructor(rawFn: FnString) {
    this.fnString = rawFn
    this.fn = turnFnStringToFn(rawFn)
  }
  run() {
    return this.fn()
  }
}
export const turnFnStringToFn = (fnString: FnString): Function => {
  return Function(`return ${fnString}`)()
}
export const createCrawler = () => {}
