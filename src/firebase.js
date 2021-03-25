import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'


// firebase init
const firebaseConfig = {
  apiKey: "AIzaSyDIvmjxNOhq-jX5JCEbGKdVOg_OTiH4-pU",
  authDomain: "tokene2c-2e1b5.firebaseapp.com",
  projectId: "tokene2c-2e1b5",
  storageBucket: "tokene2c-2e1b5.appspot.com",
  messagingSenderId: "369714670327",
  appId: "1:369714670327:web:b5bec48f8f40f0912501f2",
  measurementId: "G-3F8QX6V30T"
}
firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()
const auth = firebase.auth()

// collection references
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const tokensE2CCollection = db.collection('tokensE2C')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')
const transactions = db.collection('transactions')

// export utils/refs
export {
  db,
  auth,
  usersCollection,
  tokensE2CCollection,
  postsCollection,
  commentsCollection,
  likesCollection,
  transactions
}
