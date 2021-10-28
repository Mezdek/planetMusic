import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand href='#home'>Planet Music</Navbar.Brand>
        <Nav className='me-auto'>
          <Nav.Link>
            <Link to='/'>Home</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to='/hot_tracks'>Hot Tracks</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to='/random_playlist'>Random Playlist</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to='/events'>Events</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to='/quiz'>Quiz</Link>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
