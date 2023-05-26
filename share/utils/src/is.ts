import parser from 'cron-parser'
export const isFunctionString = (str: string): str is FnString => {
  const functionRegex =
    /^(async\s+)?function\s*\w*\s*\([\w\s,]*\)\s*\{[\s\S]*\}$/
  return functionRegex.test(str)
}
export const isAsyncFunctionString = (str: string): str is FnString => {
  const functionRegex = /^async\s*function\s*\w*\s*\([\w\s,]*\)\s*\{[\s\S]*\}$/
  return functionRegex.test(str)
}
interface FunctionSignature {
  (...args: any[]): any
}

export type FnString = string & FunctionSignature

export const isCron = (str: string): boolean => {
  if (!str) return false
  try {
    const interval = parser.parseExpression(str)
    console.log('interval', interval)
    const nextDate = interval.next().toDate()
    console.log('nextDate', nextDate)
    return true
  } catch (err) {
    console.log('err', err)
    return false
  }
}
