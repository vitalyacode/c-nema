import { FullFilm, IFilm, ImageItem } from '../../types/index'
import axios, { AxiosPromise } from 'axios'
import { noRepeatRandom } from '../utils/noRepeatRandom'
import { from250Quantity } from '../utils/constants'

const httpClient = axios.create({
  baseURL: 'https://imdb-api.com/en/API/',
})

const getById = async (id: string): Promise<AxiosPromise> => {
  return httpClient.get(`Title/${process.env.IMDB_KEY}/${id}`)
}

const getRandomFrom250 = async (): Promise<IFilm[]> => {
  try {
    const response = await httpClient.get(
      `Top250Movies/${process.env.IMDB_KEY}`
    )

    const films = response.data.items
    const randomIndexes = noRepeatRandom(0, 250, from250Quantity)

    const promiseArray = randomIndexes.map((index) => {
      return getById(films[index].id)
    })
    const fulfilledPromises = await Promise.all(promiseArray)
    const cleanFilms = fulfilledPromises.map((fullFilm: FullFilm) => {
      const { id, title, plot, genres, runtimeMins, image, starList } =
        fullFilm.data
      const correctImage = image.replace(
        /_V1_(.*)/g,
        '_V1_UX128_CR0,3,128,176_AL_.jpg'
      )
      return {
        id,
        title,
        plot,
        genres,
        runtimeMins,
        image: correctImage,
        starList,
      }
    })
    return cleanFilms
  } catch (err) {
    throw err
  }
}

const getInTheaters = async () => {
  try {
    const response = await httpClient.get(`InTheaters/${process.env.IMDB_KEY}`)
    return response.data
  } catch (err) {
    throw err
  }
  // const promise = new Promise((resolve) => {
  //   setTimeout(() => {
  //     resolve(films)
  //   }, 300)
  // })
  // const response = await promise
  // return response
}

const getImagesToFilm = async (
  id: string
): Promise<{ id: string; images: string[] }> => {
  const response = await httpClient.get(`Images/${process.env.IMDB_KEY}/${id}`)
  const responseData: ImageItem[] = response.data.items
  const images = responseData
    .filter(({ image }: ImageItem) => {
      const regex = /_V1_Ratio.\.\d/g
      const searchRes = image.match(regex)![0]
      const version = parseInt(searchRes[searchRes.length - 1])
      return version > 1
    })
    .map(({ image }: ImageItem) => {
      return image
    })

  return { images, id }
}

// export const getImagesToFilm = async (filmId: string) => {
//   const promiseArray = filmIds.map((filmId) => {
//     return getImagesToFilmPromise(filmId)
//   })
//   const fulfilledPromises = await Promise.all(promiseArray)
//   const images = fulfilledPromises.map((fullFilm: FullFilm) => {
//     const { id, title, plot, genres, runtimeMins, image } = fullFilm.data
//     const correctImage = image.replace(
//       /_V1_(.*)/g,
//       '_V1_UX128_CR0,3,128,176_AL_.jpg'
//     )
//     return { id, title, plot, genres, runtimeMins, image: correctImage }
//   })
// }

export const filmsService = { getInTheaters, getRandomFrom250, getImagesToFilm }
