import * as functions from 'firebase-functions'
import { REGION } from '../utils/constants'
import { db } from '..'
import { IFilm, OrderTicketsData, Seat } from '../../types'
import { handlePdfActions } from './helpers/handlePdfActions'

export const orderTickets = functions
  .region(REGION)
  .https.onCall(async (data: OrderTicketsData, context) => {
    const { filmId, seatIds, userCredentials } = data
    const currentOrdersRef = db.doc(`orders/${filmId}`)
    const ordersSnap = await currentOrdersRef.get()

    try {
      if (!ordersSnap.exists) {
        throw new Error('Could not find orders to film')
      }
      const seats = ordersSnap.data()?.seats
      const takenSeats: Seat[] = []
      Object.keys(seats).forEach((seatRowKey) => {
        seats[seatRowKey].forEach((seat: Seat) => {
          if (seatIds.includes(seat.id))
            if (seat.isFree) {
              takenSeats.push(seat)
              seat.isFree = false
            } else throw new Error('Seat already taken')
        })
      })
      await currentOrdersRef.set({ seats })

      const filmRef = db.doc(`films/${filmId}`)
      const filmSnap = await filmRef.get()
      const film = filmSnap.data() as IFilm
      await handlePdfActions({ film, takenSeats, userCredentials })

      return {
        result: 'ok',
      }
    } catch (err) {
      const error = err as any
      throw new functions.https.HttpsError('already-exists', error.message)
    }
  })
