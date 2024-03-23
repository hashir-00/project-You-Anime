import { useEffect, useState } from 'react';
import SpotifyPlayerComponent from '../spotify_player/spotify_player';
import Mstyles from './musicRecommender.module.css'; // Import CSS file

function MusicRecommender(emotion){



    const userEmotion= JSON.stringify(emotion).split('"')[3].toLocaleLowerCase().trim();
    const [tracks, setTracks] = useState([]);
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

    useEffect(() => {
        if(userEmotion === 'positive'){
            fetchDataCluster0();}
        else if(userEmotion === 'neutral'){
            fetchDataCluster1();}
        else if(userEmotion === 'negative'){
            fetchDataCluster2();}
        else if(userEmotion === 'extreme negative'){
            fetchDataCluster3();
        }
        else{
            fetchDataCluster1();
        }

    }, );



    const previousMusic = () => {
        setCurrentTrackIndex((prevIndex) => {
            if (prevIndex === 0) {
                return tracks.length - 1; // Go to the last track if at the beginning
            } else {
                return prevIndex - 1;
            }
        });
    }

    const nextMusic = () => {
        setCurrentTrackIndex((prevIndex) => {
            if (prevIndex === tracks.length - 1) {
                return 0; // Start from the first track if at the end
            } else {
                return prevIndex + 1;
            }
        });
    }


const fetchDataCluster0 = async () => {
        try {
            const response = await fetch('./musicList/cluster0.json'); // Update the path to your JSON file
            const data = await response.json();
            setTracks(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
const fetchDataCluster1 = async () => {
    try {
        const response = await fetch('./musicList/cluster1.json'); // Update the path to your JSON file
        const data = await response.json();
        setTracks(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};
const fetchDataCluster2 = async () => {
    try {
        const response = await fetch('./musicList/cluster2.json'); // Update the path to your JSON file
        const data = await response.json();
        setTracks(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};
const fetchDataCluster3 = async () => {
    try {
        const response = await fetch('./musicList/cluster3.json'); // Update the path to your JSON file
        const data = await response.json();
        setTracks(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};


    return(
        <>
            <div className={Mstyles.musicContainer}>
               
            <div className={Mstyles.musicRecommender}>
    <SpotifyPlayerComponent source={tracks[currentTrackIndex]?.url.split('/').pop()}/>
    {console.log(userEmotion)}
    
                </div>

                <div className={Mstyles.musicBtn}>
                    <button id={Mstyles.prvbtn} onClick={previousMusic}>
                        previous
                    </button>
                    <button id={Mstyles.nxtbtn} onClick={nextMusic}>
                        next
                    </button>
                  
                </div>
               
            </div>
        </>
    ); 
}

export default MusicRecommender;


