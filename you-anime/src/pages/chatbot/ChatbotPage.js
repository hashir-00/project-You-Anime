import React from 'react';
import ChatbotApp from './ChatbotApp'; // Import the ChatbotApp component
import { Helmet } from 'react-helmet';
import NavBar from '../../components/navbar/navbar';


const ChatbotPage = () => {
  return (
    <div className="chatbot-page">
      <Helmet>
        <title>YouAnime-Chatbot</title>
        <meta name="description" content="Chatbot" />
      </Helmet>
      <NavBar/>
      <ChatbotApp />      
    </div>
  );
};

export default ChatbotPage;
