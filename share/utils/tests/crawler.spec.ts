import { describe, it, expect } from 'vitest'
import { turnFnStringToFn } from '../crawler'
import { fnString } from './constants'

describe('crawler', () => {
  it('turnFnStringToFn', () => {
    const resultFn = turnFnStringToFn(fnString)
    expect(resultFn).toBeTypeOf('function')
    expect(resultFn(1, 2)).toBe(3)
  })
})
