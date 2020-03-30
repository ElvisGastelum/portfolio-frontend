import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './styles.css';
import logo from './img/twitter-icon.svg';

export default function NavigationBar() {
  return (
    <div>
        <Navbar sticky="top" bg="dark" variant="dark" className="App-navbar">
          <Navbar.Brand as={Link} to="/portfolio/" className="ml-5">Home</Navbar.Brand>
          <Nav className="">
            <Nav.Link as={Link} to="/portfolio/projects/">Projects</Nav.Link>
            <Nav.Link as={Link} to="/portfolio/blog/">Blog</Nav.Link>
            <Nav.Link as={Link} to="/portfolio/contact/">Contact</Nav.Link>
          </Nav>
          <a
            href="https://twitter.com/ElvisGastelum"
            className="ml-auto mr-5 App-navbar-logo">
            <img src={logo} alt="logo" />
          </a>
        </Navbar>
    </div>
  )
}