export const convertImageUrl = (url: string, format: string): string => {
  const res = url.replace(/_V1_(.*)/g, format)
  return res
}
