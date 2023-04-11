export const isFunctionString = (str: string): str is FnString => {
  const functionRegex = /^function\s*\w*\s*\([\w\s,]*\)\s*\{[\s\S]*\}$/
  return functionRegex.test(str)
}
interface FunctionSignature {
  (...args: any[]): any
}

export type FnString = string & FunctionSignature
