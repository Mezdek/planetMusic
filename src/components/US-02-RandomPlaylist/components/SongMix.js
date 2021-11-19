import Hearthis from "./Hearthis";

function SongMix({ setTrackSrc, setIsPlaying }) {
  return (
    <div className="random-songs">
      <Hearthis
        setTrackSrc={setTrackSrc}
        setIsPlaying={setIsPlaying}
        link={"http://localhost:5000/music/random"}
      />
    </div>
  );
}

export default SongMix;
