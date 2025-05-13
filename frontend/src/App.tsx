import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import Contact from './Contact/Contact';
import Experience from './Experience/Experience';
import Login from './Login/Login';
import { BrowserRouter, Routes,
  Route, 
  Navigate} from "react-router-dom";


function App() {

  function renderPage() {
    return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/experience" element={<Experience/>}/>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
    )}

  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
