'use client';

import React, { createContext, useContext } from 'react';
import { FirebaseApp } from 'firebase/app';
import { Firestore } from 'firebase/firestore';
import { Auth } from 'firebase/auth';

// تعريف "واجهة" البيانات التي تطلبها الأكاديمية
interface FirebaseProviderProps {
  children: React.ReactNode;
  firebaseApp: FirebaseApp;
  firestore: Firestore;
  auth: Auth;
}

// إنشاء سياق الأكاديمية الملكي
const FirebaseContext = createContext<any>(null);

export const FirebaseProvider: React.FC<FirebaseProviderProps> = ({ 
  children, 
  firebaseApp, 
  firestore, 
  auth 
}) => {
  return (
    <FirebaseContext.Provider value={{ firebaseApp, firestore, auth }}>
      {children}
    </FirebaseContext.Provider>
  );
};

// أداة استدعاء البيانات داخل أي صفحة في الأكاديمية
export const useFirebase = () => {
  const context = useContext(FirebaseContext);
  if (!context) {
    throw new Error('useFirebase must be used within a FirebaseProvider');
  }
  return context;
};
