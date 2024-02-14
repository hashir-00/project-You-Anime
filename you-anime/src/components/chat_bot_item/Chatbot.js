import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Chatbot.css';

const Chatbot = () => {
  return (
    <Link to="/ChatbotPage" style={{textDecoration:"none"}}>
    <div className="dashboard-item" id="chatbot">
    Chatbot
      
    </div>
    </Link>
  );
};

export default Chatbot;
