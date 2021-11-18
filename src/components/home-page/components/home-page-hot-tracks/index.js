import HotTracks from '../../../../images/music.png'
import {Link} from 'react-router-dom'


function HomePageHotTracks() {
  return(
    <div className="singleHomePageBoxPink"> 
      <Link to="/playlist" style={{ textDecoration: 'none', color: "rgb(33, 37, 41)" }}>
      <p className="homePageBoxTitle">Galactic <br/> Playlist</p>
      <div className="gifBoxContainer">
      <img src={HotTracks} alt="GalacticPlaylist"/>
      </div>
      </Link>
    </div>
  )
}

export default HomePageHotTracks;