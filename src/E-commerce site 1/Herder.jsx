import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";
function Herder() {
  return (
    <div>
      <Navbar bg="dark" expand="lg" data-bs-theme="dark" className='header-main'>
        <Container className="header-content">
          <Navbar.Brand href="#home" className="header-brand">
            <i
              className="fa-brands fa-react fa-spin"
              style={{ color: "#FFFF", fontSize: "35px" }}
            ></i>
            E-Commerce Web
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 manu-bar"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <div className="cart-icon">
              <p style={{}}>0</p>
              <i
                className="fa-solid fa-cart-plus"
                style={{ color: "#FFFF", fontSize: "35px" }}
              ></i>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Herder;
