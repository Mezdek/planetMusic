import React, { useState } from "react";
import download from "../assets/download.png";
import genre from "../assets/genre.png";
import like from "../assets/like.png";
import geo from "../assets/location.png";
import played from "../assets/played.png";
import "./stylesheets/SingleSong.css";
import TimeFormat from "./TimeFormat";

function SingleSong({ setTrackSrc, data, setIsPlaying }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="song__container">
      <div className="song__image__container">
        <img
          className="song__image"
          src={data.image}
          alt={data.imagAlt}
          onClick={() => {
            setTrackSrc(data.url);
            setIsPlaying(true);
          }}
        />
      </div>
      <div className="song__description">
        <p className="song__title">{data.title}</p>
        <TimeFormat time={data.duration} />
      </div>
      <div className="song__meta">
        <div className="song__meta__download">
          <img
            src={download}
            className={data.downloadable === "1" ? "pointer" : "inactive"}
            alt="download"
          />
          <span className="song__meta__text">{data.downloadCount}</span>
        </div>
        <div className="song__meta__like">
          <img
            src={like}
            alt="like"
            onClick={() => {
              setLiked(!liked);
            }}
            className={liked ? "pointer" : "pointer inactive"}
          />
          <span className="song__meta__text">{data.favoriteCount}</span>
        </div>
        <div className="song__meta__played">
          <img src={played} alt="played" />
          <span className="song__meta__text">{data.playedCount}</span>
        </div>
        <div className="song__meta__genre">
          <img src={genre} alt="genre" />
          <span className="song__meta__text">{data.genre}</span>
        </div>
        <div className="song__meta__geo">
          <img src={geo} alt="geo" />
          <span className="song__meta__text">{data.location}</span>
        </div>
      </div>
    </div>
  );
}
export default SingleSong;
