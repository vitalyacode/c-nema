import { randomUUID } from 'crypto'

export const generateSeat = (row: number, column: number) => {
  return {
    id: randomUUID(),
    isFree: !!Math.round(Math.random()),
    row: row + 1,
    column: column + 1,
  }
}
