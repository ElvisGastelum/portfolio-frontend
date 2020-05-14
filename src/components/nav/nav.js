import React from "react";

import "./styles.css";
import logo from "./img/logo.svg";

export default function Nav({navRef}) {
  

  return (
    <nav className="navigation transparent" ref={navRef}>
      <div className="navigation-logo">
        <a href="#top">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div className="navigation-links">
        <a className="navigation-link" href="https://docs.google.com/document/d/1unZEQPnvFd2LHnUx8ICC2kbTIy-uAmj9YF56kEAsPQA/edit?usp=sharing">
          <div className="navigation-link-icon">
            <i className="fas fa-file-contract"></i>
          </div>
          <span className="navigation-link-text">CV</span>
        </a>
        <a className="navigation-link" href="#about">
          <div className="navigation-link-icon">
            <i className="fas fa-address-card"></i>
          </div>
          <span className="navigation-link-text">About</span>
        </a>
        <a className="navigation-link" href="#contact">
          <div className="navigation-link-icon">
            <i className="fas fa-address-book"></i>
          </div>
          <span className="navigation-link-text">Contact</span>
        </a>
      </div>
    </nav>
  );
}
