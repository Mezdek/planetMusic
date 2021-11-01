import './App.css';
import HomePage from './components/home-page'
import HotTracks from './components/US-01-HotTracks'
import RandomPlaylist from './components/US-02-RandomPlaylist'
import FinalEvent from './components/US-03-Events'
import Quiz from './components/US-04-Quiz'
import Navbar from './components/shared-components/nav-bar'
// import Footer from './components/shared-components/footer'
import { BrowserRouter, Switch, Route } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/hot_tracks">
            <HotTracks />
          </Route>
          <Route path="/random_playlist">
            <RandomPlaylist />
          </Route>
          <Route path="/events">
            <FinalEvent />
          </Route>
          <Route path="/quiz">
            <Quiz />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;