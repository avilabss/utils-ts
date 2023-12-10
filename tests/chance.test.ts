import { should } from '../src/chance'

describe('Testing check functions', () => {
  test('should?', () => {
    expect(typeof should(0)).toBe(typeof true)
  })
})
