import React from 'react';
import logo from './img/GitHub-Mark.svg';
import './styles.css';

export default function Header() {
    return (
        <header className="App-header">
            <a href="https://github.com/ElvisGastelum">
                <img src={logo} alt="logo" className="App-logo"/>
            </a>
            <p>
                Elvis Gastelum - <code>Web developer</code>
            </p>
            <br />
            <p>
                I can help you solve any problem
                </p>
            <p>NodeJS, React, C#</p>
        </header>
    )
}