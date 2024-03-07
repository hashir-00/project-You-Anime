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
                        <Link to="/login">Login</Link>
                    </li>         
                    
                    <li>
                        <Link to="/memegallery">Meme gallery</Link>   
                    </li>
                   

                </ul>
            </nav>
        </div>
    )
}   

export default NavBarHome;