import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import Contact from './Contact/Contact';
import Experience from './Experience/Experience';
import Login from './Login/Login';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

function App() {
  function renderPage() {
    switch(window.location.pathname) {
      case "/":
        return <Home />;
      case "/contact":
        return <Contact />;
      case "/experience":
        return <Experience />;
      default:
        return <Login />;
    }
  }

  return (
  <div className="Root">
    {/* This is the header */}
    <div className="headerApp">
      <Header />
    </div>

    <div className="App">
      {renderPage()}
    </div>

    {/* This is the footer */}
    <div className="footerApp">
      <Footer />
    </div>
  </div>
  );
}

export default App;
