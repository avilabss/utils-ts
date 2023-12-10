import { getRandomNumber } from './random'

export async function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export async function randomSleep(msMin: number, msMax: number): Promise<void> {
  const random = getRandomNumber(msMin, msMax)
  return sleep(random)
}

export async function quickSleep(): Promise<void> {
  return await randomSleep(100, 1000)
}

export async function shortSleep(): Promise<void> {
  return await randomSleep(1000, 3000)
}

export async function mediumSleep(): Promise<void> {
  return await randomSleep(3000, 5000)
}

export async function longSleep(): Promise<void> {
  return await randomSleep(5000, 10000)
}

export async function veryLongSleep(): Promise<void> {
  return await randomSleep(10000, 20000)
}
