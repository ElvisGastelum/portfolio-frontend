import React from 'react';
import logo from './img/github-logo.svg';
import './styles.css';

export default function Home() {
  return (
    <header
      className="h-100 text-center d-flex"
    >
      <div className="justify-content-center d-flex flex-column flex-fill">
        <div>
          <a href="https://github.com/ElvisGastelum">
            <img src={logo} alt="logo" className="App-logo" />
          </a>
        </div>
        <div>
          <p>
            Elvis Gastelum - <code>Web developer</code>
          </p>
          <br />
          <p>
            I can help you solve any problem
                </p>
          <p>NodeJS, React, C#</p>
        </div>
      </div>
    </header>
  )
}