// import React, { useState } from 'react';
// import axios from 'axios';
// import './ChatbotApp.css';  // Import the CSS file

// const ChatbotApp = () => {
//   const [inputText, setInputText] = useState('');
//   const [outputText, setOutputText] = useState('');

//   const handleInputChange = (event) => {
//     setInputText(event.target.value);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       // Make a request to the chatbot API
//       const response = await axios.post('http://127.0.0.1:7860/', {  // Update the URL according to your API
//         message: inputText
//       });

//       // Update the output text with the response from the API
//       setOutputText(response.data.outputText); // Adjust response handling based on actual response structure
//     } catch (error) {
//       console.error('Error fetching data from chatbot API:', error);
//     }
//   };

//   return (
//     <div className="chatbot">
//       <h1>Chatbot</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Type your message..."
//           value={inputText}
//           onChange={handleInputChange}
//         />
//         <button type="submit">Send</button>
//       </form>
      
//       <div className="output">
//         <p>{outputText}</p>
//       </div>
//     </div>
//   );
// };

// export default ChatbotApp;

import React, { useState } from 'react';
import axios from 'axios';

function ChatbotApp() {
  const [userInput, setUserInput] = useState('');
  const [botResponse, setBotResponse] = useState('');

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userInput.trim() === '') return;

    try {
      const response = await axios.post('/chat', { user_input: userInput.trim() });
      setBotResponse(response.data.response);
    } catch (error) {
      console.error('Error:', error);
    }

    setUserInput('');
  };

  return (
    <div>
      <h1>Chat with Bot</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type your message..."
          value={userInput}
          onChange={handleInputChange}
        />
        <button type="submit">Send</button>
      </form>
      {botResponse && <p>Bot: {botResponse}</p>}
    </div>
  );
}

export default ChatbotApp;
