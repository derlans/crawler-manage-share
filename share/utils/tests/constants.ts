import { Crawler } from '../src/crawler'
import { FnString } from '../src/is'

export const fnString = 'function add(a, b) { return a + b; }' as FnString
export const fnString2 = 'function add ( a ,  b ) { return a + b; }' as FnString
export const fnString3 =
  'async  function add ( a ,  b ) { return a + b; }' as FnString
export const notFnString1 = '(a,b)=>a+b'
export const notFnString2 = 'return a+b'
export const crawlerFnString =
  'async function add(env, user) { return new Promise((resolve)=>{setTimeout(resolve(user),100)}) }' as FnString
async function test2(env, user) {
  return new Promise((resolve, reject) => {
    if (user.a > 2) {
      // @ts-ignore
      setTimeout(resolve(user), 100)
    } else {
      // @ts-ignore
      setTimeout(reject({ a: 404 }), 100)
    }
  })
}
export const crawlerFnString2 = test2.toString() as FnString

function test3(env, user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(user)
    }, user.time)
  })
}
export const crawlerFnString3 = test3.toString() as FnString
// Crawler
export const crawler1 = new Crawler(crawlerFnString)
export const crawler2 = new Crawler(crawlerFnString2)
export const crawler3 = new Crawler(crawlerFnString3)
