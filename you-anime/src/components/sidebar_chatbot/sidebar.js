import React from 'react';
import styles from './sidebar.module.css';


function SideBar(){
    return(
        
            <div className={styles.sidebarItems}>
                <ul>
                    <li>Home</li>
                    <li>Profile</li>
                    <li>Chat</li>
                    <li>Settings</li>
                    
                </ul>

    
        </div>
    )
}

export default SideBar;