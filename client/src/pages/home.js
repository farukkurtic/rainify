import axios from "axios";
import SoundDisplay from "../components/soundDisplay";
import AudioPlayer from "../components/audioPlayer";
import React, { useState, useEffect } from "react";

export default function HomePage() {
    
    const [sounds, setSounds] = useState(null);
    const [chosenSound, setChosenSound] = useState(null);

    useEffect(function() {

        async function fetchSounds() {
            try {
                const response = await axios.get("http://localhost:3001/sounds");
                setSounds(response.data);
            } catch(error) {
                console.log("error occurred while fetching data: ", error);
            }
        }

        fetchSounds();

    }, []);

    function handleClick(sound) {
        setChosenSound(sound);
    }

    return (
        <div className="home-div">
            <div className="slider-container">
                {
                chosenSound ? <AudioPlayer sound={chosenSound} /> 
                : <div className="choose-sound-text">
                    <i class="fa-solid fa-headphones fa-bounce"></i>
                    <h1>Choose a sound below</h1>
                </div>
                }
            </div>
            <div className="sound-container">
                {sounds && sounds.map(function(sound) {
                    return (
                        <SoundDisplay
                            key={sound.name}
                            onClick={() => handleClick(sound)}
                            soundName={sound.name}
                            soundDescription={sound.description}
                        />
                    );
                })}
            </div>
        </div>
    );
}
