import React, { useEffect, useRef, useState } from "react";
import pause from "../assets/pause.png";
import play from "../assets/play.png";
import repeat from "../assets/repeat.png";
import "./stylesheets/AudioPlayer.css";
import TimeFormat from "./TimeFormat";
function AudioPlayer({ trackSrc, isPlaying, setIsPlaying }) {
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isLooping, setIsLooping] = useState(false);
  const progbar = useRef();
  const audioPlayer = useRef();

  //after loading the component
  //reading duration and setting time update
  useEffect(() => {
    audioPlayer.current.src = trackSrc;
    audioPlayer.current.ondurationchange = (e) => {
      setDuration(audioPlayer.current.duration);
    };
    audioPlayer.current.ontimeupdate = (e) => {
      setProgress(audioPlayer.current.currentTime);
    };
    audioPlayer.current.onended = (e) => {
      setIsPlaying(false);
      setProgress(0);
      document.documentElement.style.setProperty("--prog", `0%`);
    };
  }, [trackSrc]);

  // setting the progress bar value

  useEffect(() => {
    if (progress / duration) {
      document.documentElement.style.setProperty(
        "--prog",
        `${100 * (progress / duration)}%`
      );
    }
    audioPlayer.current.loop = isLooping;
  }, [progress, isLooping, duration]);

  useEffect(() => {
    if (isPlaying) {
      audioPlayer.current.play();
    } else {
      audioPlayer.current.pause();
    }
  }, [isPlaying]);

  return (
    <div className="player">
      <audio ref={audioPlayer}></audio>
      <div
        id="progcon"
        onClick={(e) => {
          let clickPosition =
            ((e.nativeEvent.layerX - e.target.offsetLeft) /
              e.target.clientWidth) *
            duration;
          audioPlayer.current.currentTime = clickPosition;
        }}
      >
        <span ref={progbar} id="progbar"></span>
      </div>
      <div id="panel">
        <div id="progtime">
          <TimeFormat time={progress} />
        </div>
        <div id="controls">
          <img
            src={isPlaying ? pause : play}
            alt="play song"
            id="playbtn"
            onClick={() => {
              setIsPlaying(!isPlaying);
            }}
          />
          <img
            src={repeat}
            onClick={() => {
              setIsLooping(!isLooping);
            }}
            style={isLooping ? { opacity: "1" } : { opacity: "0.5" }}
            alt="repeat song"
            id="loopbtn"
          />
        </div>
        <div id="duration">
          <TimeFormat time={duration} />
        </div>
      </div>
    </div>
  );
}

export default AudioPlayer;
