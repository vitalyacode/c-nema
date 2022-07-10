import * as admin from 'firebase-admin'

admin.initializeApp()

export const db = admin.firestore()

const updateFilms = require('./film/index')
const orderTickets = require('./order/index')

exports.updateFilms = updateFilms.updateFilms
exports.orderTickets = orderTickets.orderTickets
// The Firebase Admin SDK to access Firestore.

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
