export function should(chance: number): boolean {
  if (chance > Math.random()) {
    return true
  }

  return false
}
