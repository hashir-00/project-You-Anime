import { Link } from "react-router-dom"
import React from "react"
import styles from "./navBarHome.module.css"
import { loggedIn } from "../../pages/Login/Login"
const NavBarHome= ()=>{
    return(
        <div className={styles.navbarstart}>
             <nav>
                <ul>
                    {loggedIn && ( <li>
                         <Link to="/Dashboard">Dashboard</Link>
                    </li>)}
                    
                  
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