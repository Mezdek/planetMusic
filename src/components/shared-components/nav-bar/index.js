import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import logo from './images/logo.png';
import { LinkContainer } from 'react-router-bootstrap';

function NavBar({ setLoginModal, setRegisterModal }) {
  return (
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
      <Container>
        <LinkContainer to='/' exact>
          <Navbar.Brand>
            <img src={logo} style={{ width: '100px' }} alt='logo' />
          </Navbar.Brand>
        </LinkContainer>
        <LinkContainer to='/login' exact onClick={() => setLoginModal(true)}>
          <Nav.Link>Log in</Nav.Link>
        </LinkContainer>
        <LinkContainer
          to='/register'
          exact
          onClick={() => setRegisterModal(true)}
        >
          <Nav.Link>Sign up</Nav.Link>
        </LinkContainer>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
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
