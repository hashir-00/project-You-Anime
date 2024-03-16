import React, { useEffect, useState, useCallback } from 'react';
import styles from './Quiz.module.css';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const Recommendations = () => {
    const location = useLocation();
    const { level } = location.state || {};
  
    return <div>{level}</div>;
};
export default Recommendations;