import React from 'react';
import './Header.css';
import { isUserOnline } from '../UserStorage/User';

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
                href={isUserOnline() ? "/user" : "/login"}
                rel="noopener noreferrer"
                >
                { isUserOnline() ?"User" : "Login"}
                </a>
            </li>
        </ul>
    </div>
  );
}

export default Header;
