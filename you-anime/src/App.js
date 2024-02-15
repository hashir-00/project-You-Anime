import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Quiz from './components/quiz_item/Quiz';

import ChatbotPage from './pages/chatbot/ChatbotPage';
import NavBar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import './App.css';
import Dash from './pages/dash/Dash';
import CosplayPage from './pages/cosplay/CosplayPage.js';
import Signup from './pages/SignUp/SignUp.js';
import Login from './pages/Login/Login.js';
import QuizPage from './pages/quiz/QuizPage.js';
import Home from './pages/Home/Home.js';


export default function App() {
    return (
        <div>
            <BrowserRouter>
            <NavBar/>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/dash" element={<Dash />} /> {/* dashboard page */}
                    <Route path="/ChatbotPage" element={<ChatbotPage/>} />{/* chatbot page */}  
                    <Route path="/quizPage" element={<QuizPage/>} />   {/* quiz page */} 
                    <Route path="/CosplayPage" element={<CosplayPage/>} />  {/* cosplay page */} 
                    <Route path='signup' element={<Signup/>} />  {/* signup page */}
                   < Route path="/Login" element={<Login />} /> {/* cosplay item */}
                   <Route path="/home" element={<Home/>} />
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}
