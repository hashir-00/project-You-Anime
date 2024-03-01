// Live Link: https://you-anime.netlify.app/chatbot
import React, { useState } from 'react';

import './ChatbotApp.css';





function ChatbotApp() {
    const [userInput, setUserInput] = useState('');
    const [chatMessages, setChatMessages] = useState([]);

    const sendMessage = async () => {
        if (userInput.trim() === '') return;
        setChatMessages([...chatMessages, { message: userInput, sender: 'user' }]);
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
        setChatMessages(prevMessages => [...prevMessages, { message, sender: 'bot' }]);
    };
    
    const clearChat = () => {
        setChatMessages([]);
    };
        return (
            <div className="chat-container">
            <div className="messages">
              {/* Display chat messages with sender info */}
              {chatMessages.map(({ message, sender }, index) => (
                <div key={index} className={`message ${sender === 'bot' ? 'bot-message' : 'user-message'}`}>
                  {message}
                </div>
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
              <button className="send-button" onClick={sendMessage}>
                Send
              </button>
              <button className="send-button" onClick={clearChat}>
                    Clear
                </button>
            </div>
          </div>
          
  );
}

export default ChatbotApp;
