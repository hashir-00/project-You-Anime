// HomePage.jsx

import React, { useState, useEffect } from "react";
import "./HomePage.css";
import NavBarHome from "../../components/navBarHome/navBarHome";
import LoadingPage from "../loadingPage/LoadingPage";
import SpotifyPlayerComponent from "../../components/spotify_player/spotify_player";

const getRandomIndex = (max) => {
    return Math.floor(Math.random() * max);
};

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

const musicList = [
    "https://api.spotify.com/v1/tracks/4reAFBOJ56ZdM1g0oub5C8",
    "https://api.spotify.com/v1/tracks/1HXRps6gmF8yMZPsJ6n9Zk",
    "https://api.spotify.com/v1/tracks/3zLCX1TGMpsA67cW2pq6ut",
    "https://api.spotify.com/v1/tracks/5eHmOGj5szF3Pm9fHWVwuq",
    "https://api.spotify.com/v1/tracks/2BlDX1yfT0ea5wo0vjCKKa",
    "https://api.spotify.com/v1/tracks/12ad0oPQaR6X6Jcoqz8rcz",
    "https://api.spotify.com/v1/tracks/0cSkn2l67csUljEy0EEBPn",
    "https://api.spotify.com/v1/tracks/1jRdam0Y2o2vVtvltJK0tH",
    "https://api.spotify.com/v1/tracks/2cWXjk50iwkCaEesJUCm8f",
    "https://api.spotify.com/v1/tracks/7ncPjJBktLEOpstY5JOUMK",
    "https://api.spotify.com/v1/tracks/2qTBVFldq01eNa40hin4FV",
    "https://api.spotify.com/v1/tracks/3Gj9gaVfc3HHyqcIFaSa70",
    "https://api.spotify.com/v1/tracks/7M9lc2hHXKQobbHQ31Yg2v",
    "https://api.spotify.com/v1/tracks/5RmtuRIe8FJg9FRegwCqzW",
    "https://api.spotify.com/v1/tracks/7FpABRyv5TaZz0llkhjPgc",
    "https://api.spotify.com/v1/tracks/1MKAHjp9mxM80u8K3rROKf",
    "https://api.spotify.com/v1/tracks/4ESyGBnHsW6VJRIFFrZ6Vj",
    "https://api.spotify.com/v1/tracks/2ifJEieMAeQqNM0edwhDqs",
    "https://api.spotify.com/v1/tracks/7v8wKvNQQIxkugCFFjrkaO",
    "https://api.spotify.com/v1/tracks/7tciSZq2IbazfaWU90mQwk"
];   

// let spotifySource = [];

// function getSpotifyUrlSource(){
//     musicList.map((music) => {
//         spotifySource.push(music.split('/')[5]);
//     });
//     console.log("music",spotifySource);
    
// }

const HomePage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [spotifySourceIndex, setSpotifySourceIndex] = useState(0);

    useEffect(() => {
        // Simulating loading data
        setTimeout(() => {
            setIsLoading(false);
        }, 1500); // Simulating 2 seconds loading time

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % animeList.length);
        }, 5000); // Change content every 5 seconds

        const spotifyInterval = setInterval(() => {
            setSpotifySourceIndex((prevIndex) => (prevIndex + 1) % musicList.length);
        }, 180000); // Change music source every 3 minutes (180000 milliseconds)

        setSpotifySourceIndex(getRandomIndex(musicList.length));

        return () =>{ clearInterval(interval);
                    clearInterval(spotifyInterval);}
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
                    
                )} <SpotifyPlayerComponent source={musicList[spotifySourceIndex].split('/')[5]} />

            </div>
            
        
        </div>
    );
};

export default HomePage;
