import { Crawler } from '../crawler'
import { FnString } from '../is'

export const fnString = 'function add(a, b) { return a + b; }' as FnString
export const fnString2 = 'function add ( a ,  b ) { return a + b; }' as FnString
export const fnString3 =
  'async  function add ( a ,  b ) { return a + b; }' as FnString
export const notFnString1 = '(a,b)=>a+b'
export const notFnString2 = 'return a+b'
export const crawlerFnString =
  'async function add(env, user) { return new Promise((resolve)=>{setTimeout(resolve(user),100)}) }' as FnString

// Crawler
export const crawler1 = new Crawler(crawlerFnString)
