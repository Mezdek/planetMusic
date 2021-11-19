import React, { useRef, useState } from "react";
import Hearthis from "./Hearthis";
import "./stylesheets/SongSearch.css";

function SongSearch({ setTrackSrc, setIsPlaying }) {
  const [search, setSearch] = useState("");
  const searchInput = useRef();
  return (
    <div className="search">
      <div className="search-input">
        <input type="text" placeholder="Search" ref={searchInput} />
        <button
          onClick={(e) => {
            e.preventDefault();
            setSearch(searchInput.current.value);
          }}
        ></button>
      </div>
      <Hearthis
        setTrackSrc={setTrackSrc}
        setIsPlaying={setIsPlaying}
        link={`http://localhost:5000/music/search?q=${search}&page=${1}&count=${5}`}
      />
    </div>
  );
}

export default SongSearch;
