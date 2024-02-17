import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">
        {''}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <NavDropdown title="Categories" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Smartphones</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Laptops</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Fragrances</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="#cart">Cart</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
