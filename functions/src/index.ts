import { db } from './../../src/firebase-config'
import { doc, setDoc } from 'firebase/firestore'
import * as functions from 'firebase-functions'
import { getInTheaters } from './api/filmsService'
import { sanitizeFilms } from './utils/sanitizeFilms'

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const updateFilms = functions.https.onCall(async (data, context) => {
  const imdbResponse = await getInTheaters()
  const films = sanitizeFilms(imdbResponse)
  console.log(imdbResponse, '\n________________\n', films)
  await setDoc(doc(db, 'films', 'InTheatres'), {
    films,
  })
})
