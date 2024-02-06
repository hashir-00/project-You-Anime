// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import Quiz from '../quiz/Quiz';
import Chatbot from '../chatbot/Chatbot';
import Cosplay from '../cosplay/cosplay';
import './Dashboard.css';
import { Helmet } from 'react-helmet';
import { Route, Routes } from 'react-router-dom';
import ChatbotApp from '../chatbot/ChatbotApp';
import NavBar from '../../components/navbar/navbar';



const Dashboard = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    document.title = 'YouAnime';
    document.description = 'YouAnime';
    setUser("user");
    // Fetch user information after login
    
  }, []);

  return (
    <>
    <div id="dashboard-header">
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
