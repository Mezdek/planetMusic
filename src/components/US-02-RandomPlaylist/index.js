import React, { useRef, useEffect, useState } from "react";
import "./index.css";
import play from "./assets/play.png";
import pause from "./assets/pause.png";

function Aupla() {
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);
  const [trackSrc, setTrackSrc] = useState(
    "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3"
  );
  const progbar = useRef();
  const audioPlayer = useRef();

  const showTime = (time) => {
    let minutes = "0" + parseInt(time / 60, 10);
    let seconds = "0" + parseInt(time % 60);
    return minutes + ":" + seconds.slice(-2);
  };
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
  }, [trackSrc]);

  // setting the progress bar value

  useEffect(() => {
    if (progress/duration){
    document.documentElement.style.setProperty(
      "--prog",
      `${100 * (progress / duration)}%`
    );}
  }, [progress]);
  //playback function on/off
  function playback(e) {
    if (audioPlayer.current.paused) {
      audioPlayer.current.play();
      e.target.src = pause;
    } else {
      audioPlayer.current.pause();
      e.target.src = play;
    }
  }

  return (
    <div className="page">
      <audio ref={audioPlayer}></audio>
      <div className="player">
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
        <div id='buttons'>
          <div id="#progtime">{showTime(progress)}</div>
          <img src={play} alt="play track" id="playbtn" onClick={playback} />
          <div id="duration">{showTime(duration)}</div>
        </div>
      </div>
    </div>
  );
}

export default Aupla;
