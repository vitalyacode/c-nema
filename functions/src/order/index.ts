import * as functions from 'firebase-functions'
import { REGION } from '../utils/constants'
import { db } from '..'
import { OrderTicketsData, Seat } from '../../types'

export const orderTickets = functions
  .region(REGION)
  .https.onCall(async (data: OrderTicketsData, context) => {
    const { filmId, seatIds } = data
    const currentOrdersRef = db.doc(`orders/${filmId}`)
    const ordersSnap = await currentOrdersRef.get()
    try {
      if (!ordersSnap.exists) {
        throw new Error('Could not find orders to film')
      }
      const seats = ordersSnap.data()?.seats
      Object.keys(seats).forEach((seatRowKey) => {
        seats[seatRowKey].forEach((seat: Seat) => {
          if (seatIds.includes(seat.id))
            if (seat.isFree) {
              seat.isFree = false
            } else throw new Error('Seat already taken')
        })
      })
      await currentOrdersRef.set({ seats })
      return {
        result: 'ok',
      }
    } catch (err) {
      const error = err as any
      throw new functions.https.HttpsError('already-exists', error.message)
    }
  })
