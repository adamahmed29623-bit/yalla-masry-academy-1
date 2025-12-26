'use client';

import { initializeApp, getApps, getApp, type FirebaseApp } from 'firebase/app';
import { getAuth, type Auth } from 'firebase/auth';
import { getFirestore, type Firestore } from 'firebase/firestore';

// Your web app's Firebase configuration is now hard-coded
// This is more reliable for the current setup than environment variables.
const firebaseConfig = {
  "projectId": "yalla-masry-academy",
  "appId": "1:652841336422:web:2d18c35b9a456a5c13936c",
  "storageBucket": "yalla-masry-academy.appspot.com",
  "apiKey": "AIzaSyC1sCq2O1O7n4Yd5n2f3g6hJk9l1mNn2o",
  "authDomain": "yalla-masry-academy.firebaseapp.com",
  "messagingSenderId": "652841336422"
};

interface FirebaseServices {
  firebaseApp: FirebaseApp;
  auth: Auth;
  firestore: Firestore;
}

// Singleton pattern to initialize Firebase services
let firebaseServices: FirebaseServices | null = null;

export function initializeFirebase(): FirebaseServices {
  if (firebaseServices) {
    return firebaseServices;
  }

  const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const firestore = getFirestore(app);

  firebaseServices = {
    firebaseApp: app,
    auth,
    firestore,
  };

  return firebaseServices;
}
