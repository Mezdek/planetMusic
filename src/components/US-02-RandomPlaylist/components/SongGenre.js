import { useState } from "react";
import GenreSelectList from "./GenreSelectList";
import Hearthis from "./Hearthis";
import "./stylesheets/SongGenre.css"
function SongGenre({ setTrackSrc, setIsPlaying }) {
  const [genre, setGenre] = useState("");
  return (
    <div className="genre">
      <GenreSelectList setGenre={setGenre} />
      <Hearthis
        setTrackSrc={setTrackSrc}
        setIsPlaying={setIsPlaying}
        link={`http://localhost:3030/genre/${genre}`}
      />
    </div>
  );
}
export default SongGenre;
