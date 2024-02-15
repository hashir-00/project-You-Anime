// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import Quiz from '../../components/quiz_item/Quiz';
import Chatbot from '../../components/chat_bot_item/Chatbot';
import Cosplay from '../../components/cosplay_item/Cosplay';
import './Dashboard.css';
import { Route, Routes } from 'react-router-dom';
import { auth } from '../../firebase/firebase';



const Dashboard = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    document.title = 'YouAnime';
    document.description = 'YouAnime';

    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser(currentUser.displayName || currentUser.email);
      } else {
        setUser(""); // No user signed in
      }
    });

    return () => {
      unsubscribe(); // Unsubscribe when component unmounts
    };
  }, []);

  return (
    <>
    <div id="dashboard-username">
      <p>Welcome , {user} </p>
        </div>
       
    <div className="dashboard-container">
            <Routes>
            <Route index element={<Quiz/>} ></Route>
            </Routes>
            <Routes>
            <Route index element={<Chatbot/>} ></Route>           
            </Routes>
            <Routes>
            <Route index element={<Cosplay/>} ></Route>
            </Routes>
            
            </div>
            </>
   
  );
};

export default Dashboard;
