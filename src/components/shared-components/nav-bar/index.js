import { useContext } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import logo from './images/logo.png';
import { LinkContainer } from 'react-router-bootstrap';
import Button from 'react-bootstrap/Button';
import { MainContext } from '../../../App';

function NavBar({ setLoginModal, setRegisterModal, logout }) {
  const { userName } = useContext(MainContext);

  return (
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
      <Container>
        <LinkContainer to='/' exact>
          <Navbar.Brand>
            <img
              src={logo}
              style={{ width: '100px', marginRight: '3rem' }}
              alt='logo'
            />
          </Navbar.Brand>
        </LinkContainer>
        {!userName && (
          <Button
            variant='dark'
            style={{ color: '#b2edef' }}
            onClick={() => setLoginModal(true)}
          >
            Log in
          </Button>
        )}
        {!userName && (
          <Button
            variant='dark'
            style={{ color: '#b2edef' }}
            onClick={() => setRegisterModal(true)}
          >
            Sign up
          </Button>
        )}

        {userName && (
          <div className='rounded-circle border border-light p-2 text-center'>
            <p className='p-0 m-0' style={{ color: '#ff66c4' }}>
              Hi {userName}
            </p>
          </div>
        )}
        {userName && (
          <Button variant='dark' onClick={logout}>
            Not {userName}? Log out
          </Button>
        )}
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse
          id='responsive-navbar-nav'
          style={{ marginLeft: '5rem' }}
        >
          <Nav className='me-auto'>
            <LinkContainer to='/' exact>
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/news'>
              <Nav.Link>News</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/playlist'>
              <Nav.Link>Playlist</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/events'>
              <Nav.Link>Events</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/quiz'>
              <Nav.Link>Quiz</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
