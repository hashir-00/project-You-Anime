import React from 'react';
import ChatbotApp from './ChatbotApp'; // Import the ChatbotApp component
import { Helmet } from 'react-helmet';


const ChatbotPage = () => {
  return (
    <div className="chatbot-page">
      <Helmet>
        <title>YouAnime-Chatbot</title>
        <meta name="description" content="Chatbot" />
      </Helmet>
      <ChatbotApp />      
    </div>
  );
};

export default ChatbotPage;
