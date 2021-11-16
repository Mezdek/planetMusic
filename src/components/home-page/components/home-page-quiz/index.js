import QuizImg from '../../../../images/quiz.png'
import {Link} from 'react-router-dom'


function HomePageQuiz() {
  return(
    <div className="singleHomePageBox"> 
      <Link to="/quiz" style={{ textDecoration: 'none', color: "rgb(33, 37, 41)" }}>
      <p className="homePageBoxTitle">Rocket <br/> Quiz</p>
      <div className="gifBoxContainer">
      <img src={QuizImg}/>
      </div>
      </Link>
    </div>
  )
}

export default HomePageQuiz;