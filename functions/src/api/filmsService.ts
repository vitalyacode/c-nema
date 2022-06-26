import { IFilmList } from './../../types/index'
import axios from 'axios'

const httpClient = axios.create({
  baseURL: 'https://imdb-api.com/en/API/',
})

export const getInTheaters = async () => {
  try {
    const response = await httpClient.get<IFilmList>(
      `InTheaters/${process.env.IMDB_KEY}`
    )
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

export const filmsService = { getInTheaters }
