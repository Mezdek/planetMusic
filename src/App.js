import './App.css';
<<<<<<< HEAD
// import HomePage from './components/home-page'
 import HotTracks from './components/US-01-HotTracks'
// import RandomPlaylist from './components/US-02-RandomPlaylist'
// import Events from './components/US-03-Events'
// import Quiz from './components/US-04-Quiz'
// import NavBar from './components/shared-components/nav-bar'
=======
import HomePage from './components/home-page';
import News from './components/US-01-HotTracks';
import Playlist from './components/US-02-RandomPlaylist';
import FinalEvent from './components/US-03-Events';
import Quiz from './components/US-04-Quiz';
import Navbar from './components/shared-components/nav-bar';
>>>>>>> 8c8d4a64d0fbd337f6358c20e31d2516a5b46262
// import Footer from './components/shared-components/footer'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
<<<<<<< HEAD
    <div className="App">
<HotTracks/>
    </div>
=======
    <BrowserRouter>
      <div className='App'>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route path='/news'>
            <News />
          </Route>
          <Route path='/playlist'>
            <Playlist />
          </Route>
          <Route path='/events'>
            <FinalEvent />
          </Route>
          <Route path='/quiz'>
            <Quiz />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
>>>>>>> 8c8d4a64d0fbd337f6358c20e31d2516a5b46262
  );
}

export default App;
