import React, { useState, useEffect, useRef } from 'react';
import './chat.css'; // Import CSS file

function ChatBot() {
  const [message, setMessage] = useState('');
  const [output, setOutput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const chatContainerRef = useRef(null); // Ref for chat container

  useEffect(() => {
    // Send the first prompt when the component mounts
    sendFirstPrompt();
    
  }, []); // Empty dependency array ensures this effect runs only once, similar to componentDidMount

  const sendFirstPrompt = async () => {
    const firstPrompt = "Act like you are an emotional supporter"; // Your first prompt
    const requestData = {
      message: firstPrompt,
      history: [],
      system_prompt: "", // No system prompt for the first prompt
      temperature: 0.9,
      max_new_tokens: 256,
      top_p: 0.95,
      repetition_penalty: 1.0
    };

    // eslint-disable-next-line no-unused-vars
    const response = await fetch('http://127.0.0.1:5000/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestData)
    })
    .then(response => response.json())
    .then(data => {
      setOutput(data.output);
    })
    .catch(error => {
      console.error('Error:', error);
    });
    
  }
  const scrollToBottom = () => {
    const chatContainer = document.querySelector('.chat-container');
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }
  const clearChatHistory = () => {
    setChatHistory([]);
  }

  const sendMessage = async() => {
    if (!message.trim() || message==="Please enter a valid message") {
        // If the message is empty or contains only whitespace, do not send
       return setMessage("Please enter a valid message");
      }
      else{ 
        setMessage(""); // Clear the input field
        const requestData = {
        message: message,
        history: chatHistory, // Pass chat history with the request
        system_prompt: "you: Hi, how are you?\nbot: I'm fine, thank you. How can I help you today?",
        temperature: 0.9,
        max_new_tokens: 256,
        top_p: 0.95,
        repetition_penalty: 1.0
      };
  
      // eslint-disable-next-line no-unused-vars
      const response = await fetch('http://127.0.0.1:5000/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
      })
      .then(response => response.json())
      .then(data => {
        setOutput(data.output);
        setChatHistory(prevHistory => [...prevHistory, { userMessage: message, botMessage: data.output }]);
        setMessage(''); // Clear the input field
      scrollToBottom(); // Scroll to the bottom of the chat container
      })
      .catch(error => {
        console.error('Error:', error);
      });}
    
   
  }

  return (
    <div className='container'>
  
      <div ref={chatContainerRef} className='chat-container'>
        <div className='message bot-message'>{output}</div>
        {chatHistory.map((item, index) => (
          <React.Fragment key={index}>
            <div className='message user-message'>{item.userMessage}</div>
            <div className='message bot-message'>{item.botMessage}</div>
          </React.Fragment>
        ))}
      </div>
      <div className='input-container'>
        <input
          type="text"
          placeholder="Enter your message"
          value={message}
          onClick={(e) => setMessage('')}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
        <button onClick={clearChatHistory}>Clear Chat</button>
      </div>
    </div>
  );
}

export default ChatBot;
