import { LayoutObject, Seat } from '../../../types'
import { generateSeat } from './generateSeat'

export const generateLayout = () => {
  const result: LayoutObject = {}
  let counter = 0
  for (let i = 0; i < 4; i++) {
    const row9: Seat[] = []
    for (let j = 0; j < 12; j++) {
      row9.push(generateSeat(counter, j))
    }
    result[counter] = row9
    counter++
  }
  for (let i = 0; i < 2; i++) {
    const row4: Seat[] = []
    for (let j = 0; j < 4; j++) {
      row4.push(generateSeat(counter, j))
    }
    result[counter] = row4
    counter++
  }
  return result
}
