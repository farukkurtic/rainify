import { useEffect, useRef, useState } from "react";

export default function AudioPlayer(props) {
    const audioRef = useRef(null);
    const [volume, setVolume] = useState(0.5);
    const [isPlaying, setIsPlaying] = useState(true);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.load();
    
            const playAudio = () => {
                audioRef.current.play();
                audioRef.current.loop = true;
                audioRef.current.removeEventListener("canplaythrough", playAudio);
            };
    
            audioRef.current.addEventListener("canplaythrough", playAudio);
        }
    }, [props.sound.audioLink]);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume;
        }
    }, [volume]);

    function handleVolumeChange(event) {
        setVolume(event.target.value);
    }

    function handleClick() {
        if (isPlaying) {
            setIsPlaying(false);
            audioRef.current.pause();
        } else {
            setIsPlaying(true);
            audioRef.current.play();
        }
    }

    return (
        <div className="audio-player">
            <audio ref={audioRef}>
                <source src={props.sound.audioLink} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>

            {isPlaying ? <i className="fa-solid fa-pause" onClick={handleClick}></i> : <i className="fa-solid fa-play" onClick={handleClick}></i>}

            <input
                className="slider"
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
            />
        </div>
    );
}
