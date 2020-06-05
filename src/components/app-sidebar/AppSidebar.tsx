import React from "react";

import "./styles.css";

const sidebarWidth: (percent: number) => number = (percent) => {
  return (window.innerWidth / 100) * percent;
};

export const AppSidebar = () => {
  return (
    <div style={{ width: sidebarWidth(70) }} className="sidebar-container">
      <div className="sidebar-buttons">
        <div className="sidebar-button">
          <a href="https://docs.google.com/document/d/1unZEQPnvFd2LHnUx8ICC2kbTIy-uAmj9YF56kEAsPQA/edit?usp=sharing">CV</a>
        </div>
        <div className="sidebar-button">
        <a href="#about">
          About
        </a>
        </div>
        <div className="sidebar-button">
        <a href="#contact" >
          Contact
        </a>
        </div>
      </div>
    </div>
  );
};
