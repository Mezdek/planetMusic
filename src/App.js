import { useState } from 'react';
import './App.css';
import HomePage from './components/home-page';
import News from './components/US-01-HotTracks';
import Playlist from './components/US-02-RandomPlaylist';
import FinalEvent from './components/US-03-Events';
import Quiz from './components/US-04-Quiz';
import Navbar from './components/shared-components/nav-bar';
import LoginModal from './components/shared-components/loginModal';
import RegisterModal from './components/shared-components/registerModal';
// import Footer from './components/shared-components/footer'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  const [loginModal, setLoginModal] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);
  const [loginName, setLoginName] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [registerName, setRegisterName] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');

  const login = () => {
    console.log('login');
  };

  const register = () => {
    console.log('register');
  };

  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar
          setLoginModal={setLoginModal}
          setRegisterModal={setRegisterModal}
        />
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
          <Route path='/login'>
            <LoginModal
              show={loginModal}
              setShow={setLoginModal}
              name={loginName}
              password={loginPassword}
              setName={setLoginName}
              setPassword={setLoginPassword}
              login={login}
            />
          </Route>
          <Route path='/register'>
            <RegisterModal
              show={registerModal}
              setShow={setRegisterModal}
              name={registerName}
              password={registerPassword}
              setName={setRegisterName}
              setPassword={setRegisterPassword}
              register={register}
            />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
