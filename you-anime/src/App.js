import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Quiz from './components/quiz_item/Quiz';
import Cosplay from './components/cosplay_item/cosplay';
import ChatbotPage from './pages/chatbot/ChatbotPage';
import NavBar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import './App.css';


export default function App() {
    return (
        <div>
            <BrowserRouter>
            <NavBar/>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/chatbotPage" element={<ChatbotPage/>} />{/* chatbot page */}  
                    <Route path="/quizPage" element={<Quiz/>} />   {/* quiz page */} 
                    <Route path="/cosplayPage" element={<Cosplay />} />  {/* cosplay page */}      
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}
