import { useEffect, useState } from "react";
import { addDoc, collection, deleteDoc, doc, getDocs, setDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";




function Todo(){
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState('');
  const [editMode, setEditMode] = useState(null);
  const [editText, setEditText] = useState('');


  const fetchTodos = async () => {
    const todosCollection = collection(db, 'Todos');
    const todosSnapshot = await getDocs(todosCollection);
    const todosData = todosSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    setTodos(todosData);
  };
  useEffect(() => {
    // Fetch todos from Firestore
   

    fetchTodos();
  }, );

  const addTodo = async () => {
    if (todoInput.trim() !== '') {
      const todosCollection = collection(db, 'Todos');
      const newTodo = {
        text: todoInput,
        completed: false
      };
      await addDoc(todosCollection, newTodo);
      setTodoInput('');
      setTodos([...todos, newTodo]);
      console.log("done");
    }

  };

  const deleteTodo = async id => {
    if (!id) {
      console.error('ID is undefined');
      return;
    }
  
    const todoRef = doc(db, 'Todos', id);
    await deleteDoc(todoRef);
    setTodos(todos.filter(todo => todo.id !== id));
    setEditMode(null);
    setEditText('');
  };

  const updateTodo = async (id, newText) => {
    if (!id) {
      console.error('ID is undefined');
      return;
    }
  
    const todoRef = doc(db, 'Todos', id);
    await setDoc(todoRef, { text: newText }, { merge: true });
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, text: newText };
      }
      return todo;
    });
    setTodos(updatedTodos);
    setEditMode(null);
    setEditText('');
  };

  return (
    <div className="container">
      <h1>Todo App</h1>
      <input
        type="text"
        value={todoInput}
        onChange={e => setTodoInput(e.target.value)}
        placeholder="Enter a new todo"
      />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {editMode === todo.id ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={e => setEditText(e.target.value)}
                />
                                  <button onClick={() => updateTodo(todo.id, editText)}>Save</button>
                  <button onClick={() => setEditMode(null)}>Cancel</button>
                </>
              ) : (
                <>
                  {todo.text}
                  <button onClick={() => setEditMode(todo.id)}>Edit</button>
                  <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Todo;