import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import logo from "./images/logo.png"

function NavBar() {
  return (
    <Navbar bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand href='#home' ><img src={logo} style={{width:"100px"}} alt="logo"/></Navbar.Brand>
        <Nav className='me-auto'>
          <Nav.Link>
            <Link to='/' style={{color:"white"}} >Home</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to='/hot_tracks' style={{color:"white"}}>Hot Tracks</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to='/random_playlist' style={{color:"white"}}>Random Playlist</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to='/events' style={{color:"white"}}>Events</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to='/quiz' style={{color:"white"}}>Quiz</Link>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
