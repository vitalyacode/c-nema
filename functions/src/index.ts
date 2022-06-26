import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import { getInTheaters } from './api/filmsService'
import { sanitizeFilms } from './utils/sanitizeFilms'
import { REGION } from './utils/constants'

// The Firebase Admin SDK to access Firestore.

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript

export const updateFilms = functions
  .region(REGION)
  .https.onCall(async (data, context) => {
    const imdbResponse = await getInTheaters()
    const films = sanitizeFilms(imdbResponse)
    admin.firestore().collection('films').doc('InTheatres').set({
      films,
    })
  })
