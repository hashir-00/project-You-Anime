import React, { useState } from 'react';
import './chatbot.css'; // Import CSS file

function Chatbot() {
    const [inputText, setInputText] = useState('');
    const[ output, setOutput] = useState(''); // Add state for chat history
    const [chatHistory, setChatHistory] = useState([]);
    
    const sendMessage = async () => {
        // Update chat history with user message
        setChatHistory(prevChatHistory => [...prevChatHistory, { sender: 'You', message: inputText }]);
        // Clear input field
        setInputText('');
    
        try {
            // Send input text to Flask server
            const response = await fetch('http://127.0.0.1:5000/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ input_text: inputText })
            });
            const data = await response.json();
            // Update chat history with chatbot response
            setOutput(data.response);
            setChatHistory(prevChatHistory => [...prevChatHistory, { sender: 'Chatbot', message: data.response }]);
        } catch (error) {
            console.error('Error:', error);
        }
    };
    
    return (
        <div>
            <h1>Chatbot</h1>
            <div id="chatContainer">
                {chatHistory.map((message, index) => (
                    <p key={index} className={`message ${message.sender === 'You' ? 'userMessage' : 'chatbotMessage'}`}>
                        <strong>{message.sender}: </strong>{message.message}
                    </p>
                ))}
            </div>
            <div>
                {output && <p className="message chatbotMessage"><strong>Chatbot: </strong>{output}</p>
                }
            </div>
            <div style={{ display: 'flex' }}>
                <input
                    type="text"
                    id="inputField"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Enter your message..."
                />
                <button id="sendButton" onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
}

export default Chatbot;
