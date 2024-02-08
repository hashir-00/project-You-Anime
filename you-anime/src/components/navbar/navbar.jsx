import { Link } from "react-router-dom"
import React from "react"
import "./navbar.css"

const NavBar= ()=>{
    return(
        <div className="navbar">
             <nav>
                <ul>
                    <li>
                        <Link to="/">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/chatbotPage">Chatbot</Link>
                    </li>
                    <li>
                        <Link to="/dash">Dash</Link>
                    </li>
                    <li>
                        <Link to="/cosplay">Cosplay</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}   

export default NavBar