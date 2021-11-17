import EventImg from '../../../../images/event.png'
import {Link} from 'react-router-dom'


function HomePageEvents() {
  return(
    <div className="singleHomePageBox"> 
      <Link to="/events" style={{ textDecoration: 'none', color: "rgb(33, 37, 41)" }}>
      <p className="homePageBoxTitle">Cosmic <br/> Events</p>
      <div className="gifBoxContainer">
      <img src={EventImg} alt="CosmicEvents"/>
      </div>
      </Link>
    </div>
  )
}

export default HomePageEvents;