import React from "react";
import "./stylesheets/LandingPage.css";
import SongGenre from "./SongGenre";
import SongMix from "./SongMix";
import SongSearch from "./SongSearch";
function LandingPage({ setTrackSrc, setIsPlaying }) {
  return (
    <div className="landing-page">
      <form className="options">
        <input type="radio" name="option" value="random" id="random" />
        <label htmlFor="random" className="option-container" id="mix-container">
          <p className="option-title">Random</p>
          <div className="option-content">
            <SongMix setTrackSrc={setTrackSrc} setIsPlaying={setIsPlaying} />
          </div>
        </label>
        <input type="radio" name="option" value="genre" id="genre" />
        <label
          htmlFor="genre"
          className="option-container"
          id="genre-container"
        >
          <p className="option-title">Genre</p>
          <div className="option-content">
            <SongGenre setTrackSrc={setTrackSrc} setIsPlaying={setIsPlaying} />
          </div>
        </label>
        <input type="radio" name="option" value="search" id="search" />
        <label
          htmlFor="search"
          className="option-container"
          id="search-container"
        >
          <p className="option-title">Search</p>
          <div className="option-content">
            <SongSearch setTrackSrc={setTrackSrc} setIsPlaying={setIsPlaying} />
          </div>
        </label>
      </form>
    </div>
  );
}

export default LandingPage;
