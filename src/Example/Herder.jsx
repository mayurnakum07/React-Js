import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";
import { Link } from "react-router-dom";
import { useDarkMode } from "./Usecontext";
function Herder() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div>
      <Navbar
        bg="dark"
        expand="lg"
        data-bs-theme="dark"
        className="header-main"
      >
        <Container className="header-content">
          <Navbar.Brand href="/" className="header-brand">
            <i
              className="fa-brands fa-react fa-spin"
              style={{ color: "#FFFF", fontSize: "35px" }}
            ></i>
            Hooks Example
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 manu-bar"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link>
                {" "}
                <Link to="/"> UseState </Link>
              </Nav.Link>
              <Nav.Link>
                {" "}
                <Link to="/useeffect"> UseEffect </Link>
              </Nav.Link>
              <Nav.Link>
                {" "}
                <Link to="/usecontext"> UseReducer </Link>
              </Nav.Link>
              <Nav.Link>
                {" "}
                <Link to="/useref"> UseRef </Link>
              </Nav.Link>
            </Nav>
            <div
              className="cart-icon form-check-reverse form-switch"
              style={{ color: "white", fontSize: "20px" }}
            >
              <label className="form-check-label">
                {isDarkMode ? "Dark Mode" : "Light Mode"}
              </label>
              <input
                onClick={toggleDarkMode}
                className="form-check-input"
                type="checkbox"
              />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Herder;
