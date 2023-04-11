import { FnString } from '../is'

export const fnString = 'function add(a, b) { return a + b; }' as FnString
export const fnString2 = 'function add ( a ,  b ) { return a + b; }' as FnString
export const notFnString1 = '(a,b)=>a+b'
export const notFnString2 = 'return a+b'
