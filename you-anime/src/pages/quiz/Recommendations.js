import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addDoc, collection, deleteDoc, doc, getDocs, setDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";

const Recommendations = () => {
  const [todos, setTodos] = useState([]);
  const [checkedTodos, setCheckedTodos] = useState([]);
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

  useEffect(() => {
    fetchTodos(); // Fetch todos initially
  }, ); // Empty dependency array to fetch once on component mount

  const fetchTodos = async () => {
    const todosCollection = collection(db, 'Todos');
    const todosSnapshot = await getDocs(todosCollection);
    const todosData = todosSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    setTodos(todosData);
  };

  const RetrunToHome = () => {
    navigate('/Dashboard');
  }

  const handleCheckboxChange = async (event, recommendation) => {
    if (event.target.checked) {
      const newTodo = {
        text: recommendation.name, // Assuming the recommendation object has a 'name' property
        completed: false
      };
      const todosCollection = collection(db, 'Todos');
      const docRef = await addDoc(todosCollection, newTodo);
      setTodos([...todos, { id: docRef.id, ...newTodo }]);
      setCheckedTodos([...checkedTodos, recommendation]);
    } else {
      const todoToDelete = todos.find(todo => todo.text === recommendation.name);
      if (todoToDelete) {
        const todoRef = doc(db, 'Todos', todoToDelete.id);
        await deleteDoc(todoRef);
        setTodos(todos.filter(todo => todo.id !== todoToDelete.id));
      }
      setCheckedTodos(checkedTodos.filter(todo => todo !== recommendation));
    }
  };

const ShowRecommendations =  () => {
  return(
  <div>
    <h3>Added Todos:</h3>
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  </div>);
  
}
  return (
    <div>
      <h2>Recommendations</h2>
    
      <ul>
        {recommendations.map((recommendation, index) => (
          <li key={index}>
            <input 
              type='checkbox' 
              onChange={(event) => handleCheckboxChange(event, recommendation)} 
              checked={checkedTodos.includes(recommendation)} 
            />
            <a href={recommendation.url}>{recommendation.name}</a>
          </li>
        ))}
      </ul>
     
     

      <div>
        <button onClick={RetrunToHome}>
          Back to Dashboard
        </button>
      </div>
    </div>
  );
};

export default Recommendations;

