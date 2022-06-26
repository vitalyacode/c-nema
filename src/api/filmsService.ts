import { getDoc, doc } from 'firebase/firestore'
import axios from 'axios'
import { db } from 'src/firebase-config'

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
  const fetchFilms = async () => {
    const filmsRef = doc(db, 'films', 'InTheatres')
    const filmsSnap = await getDoc(filmsRef)
    const filmsData = filmsSnap.data()?.films
    return filmsData
  }

  const result = await fetchFilms()
  return result
}

export const filmsService = { getInTheaters }
