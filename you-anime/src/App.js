

import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard.js";
import ChatbotPage from './pages/chatbot/ChatbotPage.js';
import Footer from './components/footer/footer.js';
import CosplayPage from './pages/cosplay/CosplayPage.js';
import QuizPage from './pages/quiz/QuizPage.js';
import Recommendations from './pages/quiz/Recommendations.js';
import Home from './pages/Home/Home.js';
import './App.css';
import LoginPage from './pages/Login/LoginPage.js';
import SignUp from './pages/SignUp/SignUp.js';
import EntertainmentPage from './pages/Entertainment/entertainmentPage.js';
import AboutUsPage from './pages/aboutUs/aboutUsPage.js';
import ContactUsPage from './pages/contactUs/contactUsPage.js';
import QuizDescription from './pages/quiz/QuizDescription.js';
import QuizApp from './pages/quiz/QuizApp.js';



export default function App() {
    return (
        <div>{/* when it comes to deployment need to have the basename as the project repo name(/project-you-anime/)
        else remove the base name property*/}
            <BrowserRouter basename='/project-You-Anime'>
                <Routes>         
                    <Route path="/*" element={<Home/>} />{/* home page  */}
                    <Route path="/Dashboard" element={<Dashboard/>} />{/* dashboard page */}
                    <Route path="/ChatbotPage" element={<ChatbotPage/>} />{/* chatbot page */}  
                    <Route path="/quizPage" element={<QuizPage/>} />   {/* quiz page */} 
                    <Route path="/QuizApp" element={<QuizApp/>} />   {/* quiz page */} 
                    <Route path="/QuizDescription" element={<QuizDescription/>} />   {/* quiz page */}
                    <Route path="/Recommendations" element={<Recommendations/>} />   {/* quiz page */} 
                    <Route path="/CosplayPage" element={<CosplayPage/>} />  {/* cosplay page */} 
                    <Route path='signup' element={<SignUp/>} />  {/* signup page */}
                   < Route path="/Login" element={<LoginPage />} /> {/* cosplay item */}
                   < Route path="/AboutUs" element={<AboutUsPage/>} />
                   < Route path="/ContactUs" element={<ContactUsPage/>} />
                   < Route path="/memegallery" element={<EntertainmentPage/>} />
               
                 </Routes>
                 <Footer />
            </BrowserRouter>
        </div>
    );
}
