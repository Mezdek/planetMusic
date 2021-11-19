import React, { useState } from "react";
import AudioPlayer from "./components/AudioPlayer";
import "./index.css";
import LandingPage from "./components/LandingPage";
function App() {
  const [trackSrc, setTrackSrc] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="AppRand"> 
      <LandingPage setTrackSrc={setTrackSrc} setIsPlaying={setIsPlaying} />
      <AudioPlayer
        trackSrc={trackSrc}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
    </div>
  );
}

export default App;
