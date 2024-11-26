import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header">
        <ul>
            <li>
                <a
                href="/"
                >
                Homepage
                </a>
            </li>
            <li>
                <a
                className="App-link"
                href="/experience"
                // target="_blank"
                rel="noopener noreferrer"
                >
                My experience
                </a>
            </li>
            <li>
                <a
                className="App-link"
                href="/contact"
                rel="noopener noreferrer"
                >
                Contact
                </a>
            </li>
        </ul>
    </div>
  );
}

export default Header;
