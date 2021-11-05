import React, { useState, useEffect } from "react";
import data from "../assets/obj";
import OneSong from "./OneSong";

function Hearthis({ setTrackSrc, setIsPlaying }) {
  const [arr, setArr] = useState(data);
  const httpOpts = {
    method: "GET",
    redirect: "follow",
  };
  const myOpts = {
    page: 1,
    count: 5,
  };
  useEffect(() => {
    fetch(
      `https://api-v2.hearthis.at/feed/?page=${myOpts.page}&count=${myOpts.count}`,
      httpOpts
    )
      .then((resp) => resp.json())
      .then((res) => setArr(res))
      .catch((err) => console.log("error:", err));
      console.log(arr);
  }, []);
  return (
    <div>
      {arr.map((item, index) => (
        <OneSong setTrackSrc={setTrackSrc} data={item} key={index} setIsPlaying={setIsPlaying} />
      ))}
    </div>
  );
}
export default Hearthis;
