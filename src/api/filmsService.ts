import { IFilm } from './../types'
import { getDocs, getDoc, collection, doc } from 'firebase/firestore'
import { db } from 'src/firebase-config'

const fetchFilms = async (): Promise<IFilm[]> => {
  const filmsRef = collection(db, 'films')
  const querySnap = await getDocs(filmsRef)
  const filmsData = querySnap.docs.map((film) => {
    return { ...film.data(), id: film.id } as IFilm
  })
  // filmsSnap.data()?.films
  return filmsData
}

const getInTheaters = async (): Promise<IFilm[]> => {
  const result = await fetchFilms()
  return result
}

const getById = async (id: string): Promise<IFilm> => {
  // const films = await fetchFilms()
  const filmRef = doc(db, 'films', id)
  const docSnap = await getDoc(filmRef)
  const data = docSnap.data() as IFilm
  const result = { ...data, id }
  return result
}

export const filmsService = { getInTheaters, getById }
