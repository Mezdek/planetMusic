import React, { useState } from "react";
import "./index.css";
import Aupla from "./components/Aupla";
import Hearthis from "./components/Hearthis";
function App() {
  const [trackSrc, setTrackSrc] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="App">
      <Hearthis setTrackSrc={setTrackSrc} setIsPlaying={setIsPlaying} />
      <Aupla
        trackSrc={trackSrc}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
    </div>
  );
}

export default App;
