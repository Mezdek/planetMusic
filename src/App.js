import { useState } from 'react';
import axios from 'axios';
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
  const [message, setMessage] = useState('');

  const login = () => {
    axios
      .post('/login', { name: loginName, password: loginPassword })
      .then((response) => {
        if (response.data.message) {
          setMessage(response.data.message);
        }
        if (response.data.error) {
          setMessage('Sorry, something went wrong');
          console.log(response.data.error);
        }
      })
      .catch((err) => {
        setMessage('Sorry, something went wrong');
        console.log(err);
      });
  };

  const register = () => {
    axios
      .post('/register', { name: registerName, password: registerPassword })
      .then((response) => {
        if (response.data.message) {
          setMessage(response.data.message);
        }
        if (response.data.error) {
          setMessage('Sorry, something went wrong');
          console.log(response.data.error);
        }
      })
      .catch((err) => {
        setMessage('Sorry, something went wrong');
        console.log(err);
      });
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
              message={message}
              setMessage={setMessage}
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
              message={message}
              setMessage={setMessage}
            />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
