import { Link } from "react-router-dom"
import React from "react"
import styles from "./navBarHome.module.css"
import { loggedIn } from "../../pages/Login/Login"
import dayjs from "dayjs"
const NavBarHome= ()=>{
    return(
        <>
    
        <div className={styles.navbarstart}>
            
             <nav>
                <ul>
              
                
                <li id={styles.date}>
                         {dayjs().format("dddd, MMMM D, YYYY")}
                    </li>
                
            <div className={styles.nav}>    {loggedIn && ( <li>
                         <Link to="/Dashboard">Dashboard</Link>
                    </li>)}
                    
                  {!loggedIn && (  <li>
                        <Link to="/login">Login</Link>
                    </li> )}
                          
                    
                    <li>
                        <Link to="/memegallery">Meme gallery</Link>   
                    </li></div>

                
                   

                </ul>
            </nav>
        </div>
        </>
    )
}   

export default NavBarHome;