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
