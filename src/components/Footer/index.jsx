import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';
const twitterUri = "https://twitter.com/ElvisGastelum";


export default function Footer() {
    return (
        <div className="App-footer">
            <footer>
                <div className="credits">
                    <p>
                        Year 2020 <Link to="/portfolio/">Portfolio</Link> - <a href={twitterUri}>Elvis Gastelum</a>
                    </p>
                </div>
            </footer>
        </div>
    )
}