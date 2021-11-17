import '../../style.css'
import {Link} from 'react-router-dom'
import news from '../../../../images/News.png'

function HomePageNews() {
  return(    
      <div className="singleHomePageBoxPink">
        <Link to="/news" style={{ textDecoration: 'none', color: "rgb(33, 37, 41)" }}>
        <p className="homePageBoxTitle">Gravity <br/> News</p>
        <div className="gifBoxContainer">
        <img src={news} alt="GravityNews"/>
        </div>
      </Link>
      </div>
  )
}

export default HomePageNews;