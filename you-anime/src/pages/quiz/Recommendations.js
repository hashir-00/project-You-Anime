import React, { useEffect, useState } from 'react';

const Recommendations = () => {
  const [level, setLevel] = useState('');
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

  return (
    <div>
      <h2>{level} Recommendations</h2>
      <ul>
        {recommendations.map((recommendation, index) => (
          <li key={index}>
            {recommendation.name} : <a href={recommendation.url}>MAL URLS</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recommendations;
