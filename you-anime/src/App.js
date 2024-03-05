

import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import ChatbotPage from './pages/chatbot/ChatbotPage';
import Footer from './components/footer/footer';
import CosplayPage from './pages/cosplay/CosplayPage.js';

import QuizPage from './pages/quiz/QuizPage.js';
import Home from './pages/Home/Home.js';
import './App.css';

import LoginPage from './pages/Login/LoginPage.js';
import SignUp from './pages/SignUp/SignUp.js';
import Test from './pages/test/test.js';
import EntertainmentPage from './pages/Entertainment/entertainmentPage.js';
import AboutUsPage from './pages/aboutUs/aboutUsPage.js';
import ContactUsPage from './pages/contactUs/contactUsPage.js';


export default function App() {
    return (
        <div>
            <BrowserRouter basename='/project-You-Anime/'>
                <Routes>         
                    <Route path="/*" element={<Home/>} />{/* home page  */}
                    <Route path="/Dashboard" element={<Dashboard/>} />{/* dashboard page */}
                    <Route path="/ChatbotPage" element={<ChatbotPage/>} />{/* chatbot page */}  
                    <Route path="/quizPage" element={<QuizPage/>} />   {/* quiz page */} 
                    <Route path="/CosplayPage" element={<CosplayPage/>} />  {/* cosplay page */} 
                    <Route path='signup' element={<SignUp/>} />  {/* signup page */}
                   < Route path="/Login" element={<LoginPage />} /> {/* cosplay item */}
                   < Route path="/about" element={<Test/>} />
                   < Route path="/AboutUs" element={<AboutUsPage/>} />
                   < Route path="/ContactUs" element={<ContactUsPage/>} />
                   < Route path="/entertainment" element={<EntertainmentPage/>} />
                 </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}
