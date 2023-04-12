import { describe, it, expect } from 'vitest'
import { turnFnStringToFn } from '../crawler'
import { crawler1, fnString } from './constants'

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
    expect(v1).toEqual({ a: 1 })
  })
  it('run many function', async () => {
    const res1 = await crawler1.run({
      concurrency: 2,
      allUserParams: [{ a: 1 }, { b: 2 }, {}, {}],
    })
    expect(res1).toEqual([{ a: 1 }, { b: 2 }, {}, {}])
    const res2 = await crawler1.run({
      concurrency: 1,
      allUserParams: [{ a: 1 }, { b: 2 }, {}, {}],
    })
    expect(res2).toEqual([{ a: 1 }, { b: 2 }, {}, {}])
    const res3 = await crawler1.run({
      concurrency: 3,
      allUserParams: [{ a: 1 }, { b: 2 }, {}, {}],
    })
    expect(res3).toEqual([{ a: 1 }, { b: 2 }, {}, {}])
    const res4 = await crawler1.run({
      concurrency: 4,
      allUserParams: [{ a: 1 }, { b: 2 }, {}, {}],
    })
    expect(res4).toEqual([{ a: 1 }, { b: 2 }, {}, {}])
  })
})
