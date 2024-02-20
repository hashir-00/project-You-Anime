import React, { useState } from 'react';
import axios from 'axios';

function Test() {
  const [userInput, setUserInput] = useState('');
  const [botResponse, setBotResponse] = useState('');

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const sendMessage = async () => {
    if (userInput.trim() === '') return;
  
    try {
      const response = await axios.post('app.py', { text: userInput });
      setBotResponse(response.data.response);
    } catch (error) {
      console.error('Error:', error);
    }
  
    setUserInput('');
  };
  

  return (
    <div>
      <h1>Chat with Bot</h1>
      <div id="chat-container">
        {botResponse && <div>Bot: {botResponse}</div>}
      </div>
      <input
        type="text"
        value={userInput}
        onChange={handleInputChange}
        placeholder="Type your message..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default Test;
