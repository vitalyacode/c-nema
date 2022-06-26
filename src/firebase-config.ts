import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

type FirebaseConfig = {
  apiKey: string
  authDomain: string
  projectId: string
  storageBucket: string
  messagingSenderId: string
  appId: string
  measurementId: string
}

export const firebaseConfig: FirebaseConfig = {
  apiKey: 'AIzaSyAJYTDH98_CQZdxObkuoy6_vVNORQ7pLtg',
  authDomain: 'c-nema-bc8c9.firebaseapp.com',
  projectId: 'c-nema-bc8c9',
  storageBucket: 'c-nema-bc8c9.appspot.com',
  messagingSenderId: '133371328808',
  appId: '1:133371328808:web:b66b0fbf3a43324ceab81d',
  measurementId: 'G-6NGQKE9GG6',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export default app
export const db = getFirestore()
