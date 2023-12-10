import { hasOnlyDigits } from '../src/check'

describe('Testing check functions', () => {
  test('hasOnlyDigits', () => {
    expect(hasOnlyDigits('123')).toBe(true)
    expect(hasOnlyDigits('123abc')).toBe(false)
    expect(hasOnlyDigits('abc')).toBe(false)
    expect(hasOnlyDigits('')).toBe(false)
  })
})
