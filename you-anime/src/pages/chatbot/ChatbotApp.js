// Live Link: https://you-anime.netlify.app/chatbot
import React, { useState } from 'react';

import './ChatbotApp.css';





function ChatbotApp() {
    const [userInput, setUserInput] = useState('');
    const [chatMessages, setChatMessages] = useState([]);

    const sendMessage = async () => {
        if (userInput.trim() === '') return;

        const response = await fetch('http://127.0.0.1:5000/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `user_input=${encodeURIComponent(userInput)}`
        });

        const data = await response.json();
        appendMessage(data.response);
        setUserInput('');
    };

    const appendMessage = (message) => {
        setChatMessages([...chatMessages, `Bot: ${message}`]);
    };

    return (
      <div className="chat-container">
      <div className="messages">
          {chatMessages.map((message, index) => (
              <div key={index} className="message bot-message">{message}</div>
          ))}
      </div>
      <div className="input-container">
          <input
              type="text"
              className="user-input"
              placeholder="Type your message here..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
          />
          <button className="send-button" onClick={sendMessage}>Send</button>
      </div>
  </div>
    );
}

export default ChatbotApp;
