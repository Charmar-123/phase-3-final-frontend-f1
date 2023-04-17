
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import {Link} from 'react-router-dom'


const NavigationBar = () => {
  return (
    <Navbar id='NavigationBar' expand="lg">
      <Container  fluid>
        <Navbar.Brand href="#home">🏎️ F1Wiki</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Constructors Championship</Nav.Link>
            <Nav.Link as={Link} to="/driver_standings">Drivers Championship</Nav.Link>
            <Nav.Link as={Link} to="/team_principles">Team Principles</Nav.Link>
            <Nav.Link as={Link} to="/create_teams">Fantasy League</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationBar