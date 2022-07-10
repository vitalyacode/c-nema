import { doc, getDoc } from 'firebase/firestore'
import { db } from 'src/firebase-config'
import { LayoutObject } from 'src/types'

const getSeatsById = async (id: string): Promise<LayoutObject> => {
  const seatsRef = doc(db, 'orders', id)
  const docSnap = await getDoc(seatsRef)
  const data = docSnap.data()!.seats as LayoutObject
  return data
}

export const ordersService = { getSeatsById }
