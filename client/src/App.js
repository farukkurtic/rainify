import React, { useState } from 'react';
import './App.css';
import Background from './components/background';
import Download from './components/download';
import Header from './components/header';
import HomePage from './pages/home';

function App() {
  const [background, setBackground] = useState("street");

  function backgroundChange(clickedElement) {
    setBackground(clickedElement);

    const videoElement = document.getElementById("background-video");
    videoElement.src = clickedElement === "street"
      ? "https://rainifybucket.s3.amazonaws.com/animated-backgrouds/street-background.mp4"
      : clickedElement === "room"
      ? "https://rainifybucket.s3.amazonaws.com/animated-backgrouds/room-background.mp4"
      : clickedElement === "woods"
      ? "https://rainifybucket.s3.amazonaws.com/animated-backgrouds/forest-background.mp4"
      : "https://rainifybucket.s3.amazonaws.com/animated-backgrouds/city-background.mp4";
    videoElement.load();
  }

  return (
    <div className="App">
      <Header onClick={backgroundChange} />
      <Background
        src={
          background === "street"
            ? "https://rainifybucket.s3.amazonaws.com/animated-backgrouds/street-background.mp4"
            : background === "room"
            ? "https://rainifybucket.s3.amazonaws.com/animated-backgrouds/room-background.mp4"
            : background === "woods"
            ? "https://rainifybucket.s3.amazonaws.com/animated-backgrouds/forest-background.mp4"
            : "https://rainifybucket.s3.amazonaws.com/animated-backgrouds/city-background.mp4"
        }
      />
      <HomePage />
      <Download />
    </div>
  );
}

export default App;
