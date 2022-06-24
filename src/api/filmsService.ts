import axios from 'axios'
import { films } from 'src/utils/mockFilms'

const httpClient = axios.create({
  baseURL: 'https://imdb-api.com/en/API/',
})

export const getInTheaters = async () => {
  // try {
  //   const response = await httpClient.get<IFilmList>(`InTheaters/${process.env.REACT_APP_IMDB_KEY}`)
  //   return response.data
  // } catch (err) {
  //   throw err
  // }
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(films)
    }, 300)
  })
  const response = await promise
  return response
}

export const filmsService = { getInTheaters }
