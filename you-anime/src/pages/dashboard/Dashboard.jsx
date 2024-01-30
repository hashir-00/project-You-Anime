// src/components/Dashboard.js
import React from 'react';
import Quiz from './Quiz';
import Chatbot from './Chatbot';
import Cosplay from './cosplay';
import './Dashboard.css';



const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Quiz />
      <Chatbot />
      <Cosplay />
     
    </div>
  );
};

export default Dashboard;
