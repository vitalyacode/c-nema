export const noRepeatRandom = (
  min: number,
  max: number,
  quantity: number
): number[] => {
  let range = []
  for (let i = min; i < max; i++) {
    range.push(i)
  }
  let res = []
  for (let i = 0; i < quantity; i++) {
    let random = range.splice(Math.floor(Math.random() * range.length), 1)[0]
    res.push(random)
  }
  return res
}
