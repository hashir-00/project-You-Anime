import React, { useState } from 'react';
import axios from 'axios';

const ChatbotApp = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Make a request to the chatbot API
      const response = await axios.post('/https://your-chatbot-api-url.com', {
        input: inputText
      });

      // Update the output text with the response from the API
      setOutputText(response.data.output);
    } catch (error) {
      console.error('Error fetching data from chatbot API:', error);
    }
  };

  return (
    <div className="chatbot">
      <h1>Chatbot</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type your message..."
          value={inputText}
          onChange={handleInputChange}
        />
        <button type="submit">Send</button>
      </form>
      {outputText && (
        <div className="output">
          <p>{outputText}</p>
        </div>
      )}
    </div>
  );
};

export default ChatbotApp;
