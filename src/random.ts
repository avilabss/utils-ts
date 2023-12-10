export function getRandomNumber(min: number, max: number): number {
  const floatRandom = Math.random()
  const difference = max - min
  const random = Math.round(difference * floatRandom)
  const randomWithinRange = random + min

  return randomWithinRange
}

export function getRandomFromArray<T>(array: T[]): T {
  if (array.length === 0) throw new Error('Array is empty')
  const randomIndex = getRandomNumber(0, array.length - 1)
  const randomElement = array[randomIndex]

  return randomElement!
}
