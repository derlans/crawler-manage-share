import { describe, it, expect } from 'vitest'
import { turnFnStringToFn } from '../crawler'
import { crawler1, crawler2, crawler3, fnString } from './constants'

describe('crawler', () => {
  it('turnFnStringToFn', () => {
    const resultFn = turnFnStringToFn(fnString)
    expect(resultFn).toBeTypeOf('function')
    expect(resultFn.toString()).toBe(fnString)
    expect(resultFn(1, 2)).toBe(3)
  })
  it('runOne async function', async () => {
    const res1 = crawler1.runOne({ a: 1 })
    expect(res1 instanceof Promise).toBe(true)
    const v1 = await res1
    expect(v1.data).toEqual({ a: 1 })
  })
  it('run many function', async () => {
    const res1 = await crawler1.run({
      concurrency: 2,
      allUserParams: [{ a: 1 }, { b: 2 }, {}, {}],
    })
    expect(res1.map((v) => v.data)).toEqual([{ a: 1 }, { b: 2 }, {}, {}])
    const res2 = await crawler1.run({
      concurrency: 1,
      allUserParams: [{ a: 1 }, { b: 2 }, {}, {}],
    })
    expect(res2.map((v) => v.data)).toEqual([{ a: 1 }, { b: 2 }, {}, {}])
    const res3 = await crawler1.run({
      concurrency: 3,
      allUserParams: [{ a: 1 }, { b: 2 }, {}, {}],
    })
    expect(res3.map((v) => v.data)).toEqual([{ a: 1 }, { b: 2 }, {}, {}])
    const res4 = await crawler1.run({
      concurrency: 4,
      allUserParams: [{ a: 1 }, { b: 2 }, {}, {}],
    })
    expect(res4.map((v) => v.data)).toEqual([{ a: 1 }, { b: 2 }, {}, {}])
    // 5
    const res5 = await crawler1.run({
      concurrency: 5,
      allUserParams: [{ a: 1 }, { b: 2 }, {}, {}],
    })
    expect(res5.map((v) => v.data)).toEqual([{ a: 1 }, { b: 2 }, {}, {}])
  })
  it('run many function with error', async () => {
    const res = await crawler2.run({
      concurrency: 2,
      allUserParams: [{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }],
    })
    expect(res.map((v) => v.isSuccess)).toEqual([false, false, true, true])
    expect(res.map((v) => v.data)).toEqual([
      { a: 404 },
      { a: 404 },
      { a: 3 },
      { a: 4 },
    ])
    expect(res.map((v) => v.code)).toEqual([1, 1, 0, 0])
  })
  it('run function with timeout', async () => {
    const res = await crawler3.run({
      timeout: 100,
      allUserParams: [{ time: 50 }, { time: 110 }, { time: 150 }],
      concurrency: 5,
    })
    expect(res.map((v) => v.isSuccess)).toEqual([true, false, false])
    expect(res.map((v) => v.data)).toEqual([{ time: 50 }, null, null])
  })
})
