import React, { useEffect, useState, useCallback } from 'react';
import styles from './Quiz.module.css';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Recommendations = () => {
  const location = useLocation();
  const { level } = location.state || {};
  const jsonFiles = [
    { url: './Recommendations/beginer.json', category: 'beginner' },
    { url: './Recommendations/expert.json', category: 'expert' },
    { url: './Recommendations/inter.json', category: 'intermediary' }
  ];

  // State to hold the data from the JSON file
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    // Find the JSON file corresponding to the level
    const selectedJsonFile = jsonFiles.find(file => file.category === level);
    if (selectedJsonFile) {
      // Fetch data from the selected JSON file
      fetch(selectedJsonFile.url)
        .then(response => response.json())
        .then(data => setJsonData(data))
        .catch(error => console.error('Error fetching data:', error));
    }
  }, [level, jsonFiles]);

  return (
    <div>
      {/* Displaying the level for testing */}
      <div>Level: {level}</div>
      {/* Rendering the data as a list */}
      <ul>
        {jsonData.map((name, url) => (
          <li key={name}>{url}</li>
        ))}
      </ul>
    </div>
  );
};

export default Recommendations;