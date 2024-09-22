import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

import PathConstants from "./routes/pathconstants";

// TODO: Find out if setting the href still results in a SPA or does it actually run a separate web page
export default function Header(){ 
    return (
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="LoginRegister">LoginRegister</Nav.Link>
              <Nav.Link href="Vehicles">Our Vehicles</Nav.Link>
              <Nav.Link href="Orders">Orders</Nav.Link>
              <Nav.Link href="Tests">Test</Nav.Link>
              {/* <Nav.Link as={NavLink} to={PathConstants.HOME}>Home</Nav.Link>
              <Nav.Link as={NavLink} to={PathConstants.LOGINREGISTER}>LoginRegister</Nav.Link>
              <Nav.Link as={NavLink} to={PathConstants.VEHICLES}>Our Vehicles</Nav.Link>
              <Nav.Link as={NavLink} to={PathConstants.ORDERS}>Orders</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }