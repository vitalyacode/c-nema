import * as admin from 'firebase-admin'
import { ordersCollection } from '../../utils/constants'
import { generateLayout } from './generateLayout'

export const createLayoutDocuments = async (
  films: string[],
  batch: admin.firestore.WriteBatch
) => {
  films.forEach((id) => {
    const orderRef = admin.firestore().collection(ordersCollection).doc(id)
    batch.set(orderRef, { seats: generateLayout() })
  })
}
