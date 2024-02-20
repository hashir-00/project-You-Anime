import { Link } from "react-router-dom"
import React from "react"
import "./navBarHome.css"

const NavBarHome= ()=>{
    return(
        <div className="navbarstart">
             <nav>
                <ul>
                     <li>
                         <Link to="/Dashboard">Dashboard</Link>
                    </li>{/* will remove after testing*/}
                    <li>
                         <Link to="/signup">SignUp</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/Contact">Contact us</Link>
                    </li>
                    <li>
                        <Link to="/about">About us</Link>   
                    </li>
                    <li>
                        <Link to="/entertainment">entertainment</Link>   
                    </li>
                    <li>
                        <Link to="https://github.com/hashir-00/SDGP-CS38.git" target="_blank">Github Repositary</Link>
                    </li>

                </ul>
            </nav>
        </div>
    )
}   

export default NavBarHome;