import { filmsService } from '../api/filmsService'
import { batchFilmsAndImages } from './helpers/batchFilmsAndImages'
import { clearCollection } from '../utils/clearCollection'
import * as functions from 'firebase-functions'
import {
  filmsCollection,
  imagesCollection,
  ordersCollection,
  REGION,
} from '../utils/constants'
import { db } from '..'
import { createLayoutDocuments } from './helpers/createLayoutDocuments'

export const updateFilms = functions
  .region(REGION)
  .https.onCall(async (data, context) => {
    clearCollection(db, filmsCollection)
    clearCollection(db, imagesCollection)
    clearCollection(db, ordersCollection)
    const batch = db.batch()

    const top250Response = await filmsService.getRandomFrom250()
    const filmIds = await batchFilmsAndImages(top250Response, batch)
    createLayoutDocuments(filmIds, batch)

    await batch.commit()
  })
