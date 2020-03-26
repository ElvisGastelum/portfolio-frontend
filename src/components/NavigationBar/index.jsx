import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import { Switch, Route, Link } from 'react-router-dom';

import Home from '../Home';
import Projects from '../Projects';
import Contact from '../Contact';

import './styles.css';
import logo from './img/twitter-icon.svg';

export default function NavigationBar() {
    return (
        <div>
            <div>
                <Navbar sticky="top" bg="dark" variant="dark" className="App-navbar">
                    <Navbar.Brand as={Link} to="/portfolio/" className="ml-5">Home</Navbar.Brand>
                    <Nav className="">
                        {/* <Nav.Link as={Link} to="/">Home</Nav.Link> */}
                        <Nav.Link as={Link} to="/projects/">Projects</Nav.Link>
                        <Nav.Link as={Link} to="/contact/">Contact</Nav.Link>
                    </Nav>
                    <a 
                        href="https://twitter.com/ElvisGastelum"
                        className="ml-auto mr-5 App-navbar-logo">
                        <img src={logo} alt="logo"/>
                    </a>
                </Navbar>
            </div>
            <div>
                <Switch>
                    <Route exact path='/portfolio/' component={Home} />
                    <Route exact path='/portfolio/projects/' component={Projects} />
                    <Route exact path='/portfolio/contact/' component={Contact} />
                    <Route render={function () {
                        return <p>Not found</p>
                    }} />
                </Switch>
            </div>
        </div>
    )
}