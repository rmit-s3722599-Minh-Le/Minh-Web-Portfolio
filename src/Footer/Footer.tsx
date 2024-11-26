import React from 'react';
import './Footer.css';
import logo from '../Assets/github-mark-white.png'
import logo2 from '../Assets/github-mark.png'

function Footer() {

    function handleMouseOver(e: any) {
        e.target.src = logo2;
    }

    function handleMouseOut(e: any) {
        e.target.src = logo;
    }

  return (
    <div className="footer">
        <ul>
            <li>
                <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                >
                Privacy
                </a>
            </li>
            <li>
                <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                >
                Feedback
                </a>
            </li>
            <li>
                <a
                className="App-link"
                href="https://github.com/rmit-s3722599-Minh-Le"
                target="_blank"
                rel="noopener noreferrer"
                >
                    <span>
                        <img src={logo} id="github-logo" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} alt="logo" />
                    </span>

                Github
                </a>
            </li>
        </ul>
    </div>
  );
}

export default Footer;
