// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';

const App = () => {
  return (
    <Dashboard/>
  );
};

export default App;
