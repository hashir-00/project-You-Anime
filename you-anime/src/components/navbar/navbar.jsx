import { Link } from "react-router-dom"
import React from "react"
import "./navbar.css"

const NavBar= ()=>{
    return(
        <div className="navbar">
             <nav>
                <ul>
                    <li>
                        <Link to="/Dashboard">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/Home">Home</Link>
                    </li>
                    <li>
                        <Link to="/QuizPage">Quiz</Link>
                    </li>
                    <li>
                        <Link to="/ChatbotPage">Chatbot</Link>
                    </li>
                    <li>
                        <Link to="/CosplayPage">Cosplay</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}   

export default NavBar