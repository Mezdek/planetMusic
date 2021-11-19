import './style.css';
import { Container } from 'react-bootstrap';
import HomePageHotTracks from './components/home-page-hot-tracks';
import HomePageNews from './components/home-page-news';
import HomePageQuiz from './components/home-page-quiz';
import HomePageEvents from './components/home-page-events';

function HomePage() {
  return (
    <div>
      <div className='introductionBackground'>
        <h1 className='pageIntro'>Welcome to planet music</h1>
        <h2 className='pageSubIntro'>What our galaxy offers?</h2>
      </div>
      <Container>
        <div className='homePageBoxesWrapper'>
          <HomePageNews />
          {/* <HomePageNews/> */}
          <HomePageHotTracks />
          <HomePageEvents />
          <HomePageQuiz />
        </div>
      </Container>
    </div>
  );
}

export default HomePage;
