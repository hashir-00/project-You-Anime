import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div className="footerComponent">
            <footer>   <ul>
                <li>
                <Link to= "/AboutUs"> About us</Link>
                </li>
                <li>
                        <Link to="/ContactUs">Contact us</Link>
                    </li>
                <li>
                        <Link to="https://github.com/hashir-00/SDGP-CS38.git" target="_blank">Github Repositary</Link>
                    </li>
                    
            </ul></footer>
         
        </div>
        
       
    );
}