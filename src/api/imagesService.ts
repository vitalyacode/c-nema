import { doc, getDoc } from 'firebase/firestore'
import { db } from 'src/firebase-config'

const getImgsById = async (id: string): Promise<string[]> => {
  const imagesRef = doc(db, 'images', id)
  const docSnap = await getDoc(imagesRef)
  const data = docSnap.data()!.images as string[]
  return data
}

export const imagesService = { getImgsById }
