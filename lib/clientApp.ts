import { getApp } from "firebase/app";
import firebase from "firebase/compat/app";
import {getAuth} from "firebase/auth";
import "firebase/compat/firestore";
import { getFirestore } from "firebase/firestore";
import { initializeFirestore } from "firebase/firestore";
const clientCredentials = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};



export const app = !firebase.apps.length ? firebase.initializeApp(clientCredentials) : getApp();
export const db = getFirestore(app)
export const auth = getAuth(app);


export default firebase;