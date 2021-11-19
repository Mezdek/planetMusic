import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleSong from "./SingleSong";

function Hearthis({ setTrackSrc, setIsPlaying, link }) {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    axios
      .get(link)
      .then((resp) => setArr(resp.data))
      .catch((err) => console.log("error:", err));
  }, [link]);
  return (
    <div>
      {arr.length > 0
        ? arr.map((item, index) => (
            <SingleSong
              setTrackSrc={setTrackSrc}
              data={item}
              key={`SingleSong${index}`}
              setIsPlaying={setIsPlaying}
            />
          ))
        : null}
    </div>
  );
}
export default Hearthis;
