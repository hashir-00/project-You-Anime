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

// Initialize Firebase
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0]; // if already initialized, use that one
}

const db = getFirestore(app);

function Todo(){
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState('');
  const [editMode, setEditMode] = useState(null);
  const [editText, setEditText] = useState('');

  useEffect(() => {
    // Fetch todos from Firestore
    const fetchTodos = async () => {
      const todosCollection = collection(db, 'Todos');
      const todosSnapshot = await getDocs(todosCollection);
      const todosData = todosSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setTodos(todosData);
    };

    fetchTodos();
  }, []);
