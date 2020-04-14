import React, { useContext } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import { AppContext } from "../../app-context";

import "./styles.css";
import logo from "./img/twitter-icon.svg";

export default function NavigationBar() {
  const { theme } = useContext(AppContext);
  return (
    <div>
      <Navbar
        sticky="top"
        bg={theme}
        variant={theme}
        className="App-navbar px-5"
      >
        <Navbar.Brand as={Link} to="/" className="m-0">
          Home
        </Navbar.Brand>
        <Nav className="mx-auto">
          <Nav.Link as={Link} to="/projects">
            Projects
          </Nav.Link>
          <Nav.Link as={Link} to="/blog">
            Blog
          </Nav.Link>
          <Nav.Link as={Link} to="/contact">
            Contact
          </Nav.Link>
        </Nav>
        <a href="https://twitter.com/ElvisGastelum">
          <img src={logo} alt="logo" />
        </a>
      </Navbar>
    </div>
  );
}
