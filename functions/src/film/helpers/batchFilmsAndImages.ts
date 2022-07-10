import * as admin from 'firebase-admin'
import { IFilm } from '../../../types'
import { filmsService } from '../../api/filmsService'

export const batchFilmsAndImages = async (
  films: IFilm[],
  batch: admin.firestore.WriteBatch
) => {
  const filmIds = films.map((doc, index) => {
    const filmRef = admin.firestore().collection('films').doc(doc.id)
    const { id, ...objWithoutId } = films[index]
    batch.set(filmRef, objWithoutId)
    return id
  })
  const filmImagesPromises = filmIds.map((id) => {
    return filmsService.getImagesToFilm(id)
  })
  const imagesObj = await Promise.all(filmImagesPromises)
  imagesObj.forEach(({ images, id }) => {
    const imageRef = admin.firestore().collection('images').doc(id)
    batch.set(imageRef, { images })
  })
  return filmIds
}
