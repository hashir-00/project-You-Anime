// LoadingPage.jsx

import React from "react";
import "./LoadingPage.css";

const LoadingPage = () => {
    return (
        <div className="loading-overlay">
            <div className="loading-animation">
                <div className="you">Welcome to You-Anime</div>
          
                <div className="characters">
                    <div className="character character1"></div>
                    <div className="character character2"></div>
                    <div className="character character3"></div>
                </div>
            </div>
        </div>
    );
};

export default LoadingPage;
