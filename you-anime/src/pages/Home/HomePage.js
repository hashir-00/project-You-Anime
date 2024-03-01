// HomePage.jsx

import React, { useState, useEffect } from "react";
import "./HomePage.css";
import NavBarHome from "../../components/navBarHome/navBarHome";

const animeList = [
    { id: 1, title: "Naruto", description: "A story about a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village." },
    { id: 2, title: "Attack on Titan", description: "Set in a world where humanity resides within enormous walled cities to protect themselves from Titans, gigantic humanoid creatures." },
    { id: 3, title: "One Piece", description: "Follows the adventures of Monkey D. Luffy and his pirate crew in order to find the greatest treasure ever left by the legendary Pirate, Gold Roger." }
];

const HomePage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % animeList.length);
        }, 5000); // Change content every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="contain-HomePage">
            <NavBarHome />
            <div className="content">
                <h1 className="title">Welcome to YouAnime</h1>
                <div className="swipe-container">
                    <div className="anime-list" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {animeList.map((anime, index) => (
                            <div className={`anime-card ${index === currentIndex ? 'active' : ''}`} key={anime.id}>
                                <h2>{anime.title}</h2>
                                <p>{anime.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
