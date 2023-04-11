import { describe, expect, it } from 'vitest'
import { isFunctionString } from '../is'
import { fnString, fnString2, notFnString1, notFnString2 } from './constants'

describe('is', () => {
  it('isFunctionString', () => {
    expect(isFunctionString(fnString)).toBeTruthy()
    expect(isFunctionString(fnString2)).toBeTruthy()
    expect(isFunctionString(notFnString1)).toBeFalsy()
    expect(isFunctionString(notFnString2)).toBeFalsy()
  })
})
