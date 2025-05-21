import React from 'react';
// import logo from './logo.svg';
import './Contact.css';

function Contact() {
    return (
    <div className="App">
      {/* This is the page content. This will used as the template */}
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>
          Contact Me
        </h1>
        <p>
          Feel free to contact me via email at <a  href="mailto:minhle46@gmail.com?subject=FE opportunities">minhle46@gmail.com</a> or LinkedIn below on footer if front end roles are available!
        </p>
        <p>
          You can also call me via mobile <a href= 'tel:"+61410075362"'>"+61410075362"</a>
        </p>
      </header>
    </div>
  );
}

export default Contact;
