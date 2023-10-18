import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">MY-React-App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto     ">
              <Nav.Link>
                <Link to="/"> Home </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/Api"> APIS </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/color"> Colors </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/todos"> Todos </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
