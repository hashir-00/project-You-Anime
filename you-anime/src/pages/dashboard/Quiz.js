// src/components/Item1.js
import React from 'react';
import './Quiz.css';

const Quiz = ({ history }) => {
  const handleClick = () => {
    // Redirect to relevant page (replace '/page1' with the actual URL)
    history.push('/page1');
  };

  return (
    <div className="dashboard-item" id="Quiz" onClick={handleClick}>
      QUIZ
    </div>
  );
};

export default Quiz;
