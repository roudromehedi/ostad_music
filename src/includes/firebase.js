// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore, collection } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBs4HniVGnwwJAGtexCMHhc40Uvx2-hCkE',
  authDomain: 'roudro-music.firebaseapp.com',
  projectId: 'roudro-music',
  storageBucket: 'roudro-music.appspot.com',
  messagingSenderId: '209479905653',
  appId: '1:209479905653:web:75e55b614d3a5bf948633c',
  measurementId: 'G-MEC71KKCST'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const auth = getAuth(app)
const db = getFirestore(app)

const usersCollection = collection(db, 'users')

export { auth, db, usersCollection }
