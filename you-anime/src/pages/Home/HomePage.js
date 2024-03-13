// HomePage.jsx

import React, { useState, useEffect } from "react";
import "./HomePage.css";
import NavBarHome from "../../components/navBarHome/navBarHome";
import LoadingPage from "../loadingPage/LoadingPage";


const animeList = [
    { id: 1, title: "Naruto", description: "A story about a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village." },
    { id: 2, title: "Attack on Titan", description: "Set in a world where humanity resides within enormous walled cities to protect themselves from Titans, gigantic humanoid creatures." },
    { id: 3, title: "One Piece", description: "Follows the adventures of Monkey D. Luffy and his pirate crew in order to find the greatest treasure ever left by the legendary Pirate, Gold Roger." },
    { id: 4, title: "My Hero Academia", description: "In a world where people with superpowers known as 'Quirks' are the norm, a boy without powers dreams of becoming a hero like his idol, All Might." },
     { id: 5, title: "Demon Slayer: Kimetsu no Yaiba", description: "Follows Tanjiro Kamado, a young boy who becomes a demon slayer after his family is slaughtered by demons, and his journey to avenge their deaths and save his sister who has been turned into a demon." },
    { id: 6, title: "Fullmetal Alchemist: Brotherhood", description: "Two brothers, Edward and Alphonse Elric, search for the Philosopher's Stone to restore their bodies after a failed alchemy experiment, while uncovering a deep conspiracy." },
    { id: 7, title: "Hunter x Hunter", description: "Follows Gon Freecss as he becomes a Hunter, a skilled individual who hunts down treasures, criminals, and more, in order to find his long-lost father." },
    { id: 8, title: "One Punch Man", description: "Saitama, a hero who can defeat any opponent with a single punch, seeks to find fulfillment in his life as a hero despite his overwhelming power." },
    { id: 9, title: "Made in Abyss", description: "Follows a young girl named Riko as she descends into the mysterious Abyss, a vast and treacherous chasm, in search of her mother, encountering various wonders and horrors along the way." },
    { id: 10, title: "Steins;Gate", description: "A group of friends accidentally invents a machine capable of sending messages to the past, leading to a series of events that unravel a conspiracy and threaten their lives." },
    { id: 11, title: "Mob Psycho 100", description: "Follows Shigeo Kageyama, nicknamed Mob, a powerful psychic who tries to live a normal life while suppressing his immense psychic abilities, but gets involved in various supernatural encounters." },
    { id: 12, title: "Vinland Saga", description: "Set in the Viking Age, follows Thorfinn, a young warrior seeking revenge against the man who killed his father, amidst the backdrop of political intrigue and battles for power." },
    { id: 13, title: "Your Lie in April", description: "Follows a piano prodigy named Kousei Arima, who loses his ability to hear the sound of his piano after his mother's death, and his journey back to music with the help of a free-spirited violinist named Kaori Miyazono." },

];

const HomePage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        // Simulating loading data
        setTimeout(() => {
            setIsLoading(false);
        }, 2000); // Simulating 2 seconds loading time

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % animeList.length);
        }, 5000); // Change content every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div >
            <NavBarHome />
            <div className="content">
               
                {isLoading ? (
                    <LoadingPage />
                ) : (
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
                )}
            </div>
        </div>
    );
};

export default HomePage;
