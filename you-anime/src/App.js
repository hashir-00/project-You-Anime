import React from 'react';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import ChatbotApp from "./pages/chatbot/ChatbotApp";
import Quiz from './pages/quiz/Quiz';
import Cosplay from './pages/cosplay/cosplay';
import ChatbotPage from './pages/chatbot/ChatbotPage';
import NavBar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Dash from './pages/dash/Dash';
import './App.css';
import Login from './components/Login/Login';
import Signup from './SignUp/SignUp';

export default function App() {
    return (
        <div>
            <BrowserRouter>
            <NavBar/>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/chatbotPage" element={<ChatbotPage/>} />    
                    <Route path="/dash" element={<Dash/>} />   
                    <Route path="/cosplay" element={<Cosplay />} /> 
                    <Route path="/login" element={<Login />} /> 
                    <Route path="/signup" element={<Signup />} />     
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}
