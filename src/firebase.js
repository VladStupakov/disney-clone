import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'
import { GoogleAuthProvider, getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {

  apiKey: "AIzaSyA66Rz_yQBRUiQGCxAgMTdYTen5LSDxZm4",

  authDomain: "disney-clone-9cf29.firebaseapp.com",

  projectId: "disney-clone-9cf29",

  storageBucket: "disney-clone-9cf29.appspot.com",

  messagingSenderId: "343818809271",

  appId: "1:343818809271:web:57ec68c6f708e427604232",

  measurementId: "G-WFX31VYZ7K"

};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth()
const provider = new GoogleAuthProvider()
const storage = getStorage()

export { auth, provider, storage}
export default db