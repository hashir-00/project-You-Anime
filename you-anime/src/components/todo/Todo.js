import { useState, useEffect } from 'react';
import { initializeApp, getApps } from 'firebase/app';
import { getFirestore, collection, getDocs , addDoc,doc,setDoc,deleteDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDTMML-fs7VF__bm8vescWmNsFdAff0Cuw',
  authDomain: 'auth-a541a.firebaseapp.com',
  projectId: 'auth-a541a',
  storageBucket: 'auth-a541a.appspot.com',
  messagingSenderId: '251389327083',
  appId: '1:251389327083:web:da1f576f9908fda425f0ae',
  measurementId:'G-WCPNHY3140'
};

