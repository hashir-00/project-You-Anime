import React from 'react';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import ChatbotApp from "./pages/chatbot/ChatbotApp";
import Quiz from './pages/quiz/Quiz';
import Cosplay from './pages/cosplay/cosplay';
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
                    <Route path="/chatbotPage" element={<ChatbotPage/>} />    
                    <Route path="/quiz" element={<Quiz/>} />   
                    <Route path="/cosplay" element={<Cosplay />} />       
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}
