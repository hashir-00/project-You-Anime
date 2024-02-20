// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import Quiz from '../../components/quiz_item/Quiz';
import Chatbot from '../../components/chat_bot_item/Chatbot';
import Cosplay from '../../components/cosplay_item/Cosplay';
import './Dashboard.css';
import { auth } from '../../firebase/firebase';
import { Helmet } from 'react-helmet';
import NavBar from '../../components/navbar/navbar';



const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
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
    <div className='contain-dashboard'>
     <Helmet>
          <title>YouAnime-Dashboard</title>
          <meta name="description" content="dashboard" />
        </Helmet>
        

        <NavBar/>
    <div id="dashboard-username">
      <p>Welcome , {user} </p>
        </div>
       
    <div className="dashboard-container">

     
      <Quiz/>
      <Chatbot/>  
      <Cosplay/>
            </div>
       </div>
   
  );
};

export default Dashboard;
