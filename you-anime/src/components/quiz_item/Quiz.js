// src/components/Item1.js
import React from 'react';
import './Quiz.css';
import { Link } from 'react-router-dom';

const Quiz = () => {
 
  return (
    <Link to="/QuizPage" style={{textDecoration:"none"}}>
    <div className="dashboard-item" id="Quiz" >
      QUIZ
    </div>
    </Link>
  );
};

export default Quiz;
