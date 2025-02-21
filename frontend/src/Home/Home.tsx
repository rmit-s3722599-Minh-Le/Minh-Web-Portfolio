import React from 'react';
// import logo from './logo.svg';
import './Home.css';

function Home() {
    return (
    <div className="Homepage">
      {/* This is the page content. This will used as the template */}
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>
          Welcome to my homepage and Portfolio!
        </h1>
        <p>
          My name is Minh. I've been a Front End Developer for 3 years and a DevOps for a year! Feel free to check around my page!
        </p>
      </header>
    </div>
  );
}

export default Home;
