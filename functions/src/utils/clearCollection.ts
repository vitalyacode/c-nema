import * as admin from 'firebase-admin'

export const clearCollection = async (
  db: admin.firestore.Firestore,
  collection: string
) => {
  db.collection(collection)
    .get()
    .then((querySnapshot) => {
      querySnapshot.docs.forEach((snapshot) => {
        snapshot.ref.delete()
      })
    })
}
