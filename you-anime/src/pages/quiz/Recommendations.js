import React, { useEffect, useState } from 'react';
import styles from "./Recommendations.module.css";
import { useNavigate } from 'react-router-dom';

const Recommendations = () => {
  const [level, setLevel] = useState('');
  const navigate = useNavigate();
  const [recommendations, setRecommendations] = useState([]);
  useEffect(() => {
    const storedLevel = localStorage.getItem('level');
    if (storedLevel) {
      setLevel(storedLevel);
    }
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const jsonFiles = [
          { url: './Recommendations/beginer.json', category: 'Beginner' },
          { url: './Recommendations/inter.json', category: 'Intermediate' },
          { url: './Recommendations/expert.json', category: 'Expert' }
        ];

        const data = await Promise.all(jsonFiles.map(file => fetch(file.url).then(response => response.json())));
        const matchingCategoryData = data.find((item, index) => level === jsonFiles[index].category);
        if (matchingCategoryData) {
          setRecommendations(matchingCategoryData);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [level]);

  const RetrunToHome = () => {
    navigate('/Dashboard');
  }
  return (
    <div>
      <h2>Recommendations</h2>
      <ul>
        {recommendations.map((recommendation, index) => (
          <li key={index}>
            <a href={recommendation.url}>{recommendation.name}</a>
          </li>
        ))}
      </ul>
      <div id={styles.button}> <button onClick={RetrunToHome}>
        Back to Dashboard
      </button></div>
     

    </div>
  );
};

export default Recommendations;
