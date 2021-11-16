import { useState, useEffect } from 'react';
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
  const [inputName, setInputName] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [message, setMessage] = useState('');
  const [userName, setUserName] = useState('');
  const [userId, setUserId] = useState('');

  useEffect(() => {
    checkLogin();
  }, []);

  const checkLogin = () => {
    axios.get('/login').then((response) => {
      if (response.data.loggedIn) {
        console.log(response.data);
        setUserName(response.data.userName);
        setUserId(response.data.userId);
        setRegisterModal(false);
        setLoginModal(false);
        setMessage('');
        setInputName('');
        setInputPassword('');
      }
    });
  };

  const login = () => {
    axios
      .post('/login', { name: inputName, password: inputPassword })
      .then((response) => {
        if (response.data.message) {
          setMessage(response.data.message);
          if (response.data.loggedIn) {
            checkLogin();
          }
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
      .post('/register', { name: inputName, password: inputPassword })
      .then((response) => {
        if (response.data.message) {
          setMessage(response.data.message);
        }
        if (response.data.userCreated) {
          console.log(response.data);
          login();
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

  const logout = () => {
    axios
      .get('/logout')
      .then((response) => {
        if (response.data.sessionDestroyed) {
          console.log('logout', response.data);
          setUserName('');
          setUserId('');
          setInputName('');
          setInputPassword('');
          checkLogin();
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar
          setLoginModal={setLoginModal}
          setRegisterModal={setRegisterModal}
          userName={userName}
          logout={logout}
        />
        <RegisterModal
          show={registerModal}
          setShow={setRegisterModal}
          name={inputName}
          password={inputPassword}
          setName={setInputName}
          setPassword={setInputPassword}
          register={register}
          message={message}
          setMessage={setMessage}
        />
        <LoginModal
          show={loginModal}
          setShow={setLoginModal}
          name={inputName}
          password={inputPassword}
          setName={setInputName}
          setPassword={setInputPassword}
          login={login}
          message={message}
          setMessage={setMessage}
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
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
