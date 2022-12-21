import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <div>
      <Navbar className="navbar" bg="dark" variant="dark">
        <Nav className="nav-group">
          <div className="nav-links-container">
            <Nav.Link className="nav-link nav-item" href="/">Home</Nav.Link>
            <Nav.Link className="nav-link nav-item" href="/">Projects</Nav.Link>
            <Nav.Link className="nav-link " href="/">Contact</Nav.Link>
          </div>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;
