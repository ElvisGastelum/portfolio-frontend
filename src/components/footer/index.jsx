import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import GitHubLogo from './img/github-logo.svg'
const twitterUri = "https://twitter.com/ElvisGastelum";


export default function Footer() {
    return (
        <div>
            <footer>
                <div className="credits">
                    <p>
                        Year 2020 <Link to="/portfolio/">Portfolio</Link> - <a href={twitterUri}>Elvis Gastelum</a>
                    </p>
                    <img src={GitHubLogo} alt="github-logo" className="github-logo"/>
                    <a href="https://github.com/ElvisGastelum/portfolio">
                        https://github.com/ElvisGastelum/portfolio
                    </a>
                </div>
            </footer>
        </div>
    )
}