// src/components/Item3.js
import React from 'react';
import './Chatbot.css';

const Chatbot = ({ history }) => {
  const handleClick = () => {
    // Redirect to relevant page (replace '/page3' with the actual URL)
    history.push('/page3');
  };

  return (
    <div className="dashboard-item" id="chatbot" onClick={handleClick}>
      chatbot
    </div>
  );
};

export default Chatbot;
