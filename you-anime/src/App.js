import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import ChatbotPage from './pages/chatbot/ChatbotPage';
import Footer from './components/footer/footer';
import CosplayPage from './pages/cosplay/CosplayPage.js';
import Signup from './pages/SignUp/SignUp.js';
import Login from './pages/Login/Login.js';
import QuizPage from './pages/quiz/QuizPage.js';
import Home from './pages/Home/Home.js';
import './App.css';

export default function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>          
                    <Route path="*" element={<Home/>} />{/* home page  */}
                    <Route path="/Dashboard" element={<Dashboard/>} />{/* dashboard page */}
                    <Route path="/ChatbotPage" element={<ChatbotPage/>} />{/* chatbot page */}  
                    <Route path="/quizPage" element={<QuizPage/>} />   {/* quiz page */} 
                    <Route path="/CosplayPage" element={<CosplayPage/>} />  {/* cosplay page */} 
                    <Route path='signup' element={<Signup/>} />  {/* signup page */}
                   < Route path="/Login" element={<Login />} /> {/* cosplay item */}
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}
