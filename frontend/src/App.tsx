import React from 'react';
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
import { ROUTE } from './Constant';
import User from './User/User';


function App() {

  function renderPage() {
    return (
    <Routes>
      <Route path={ROUTE.HOME} element={<Home/>}/>
      <Route path={ROUTE.LOGIN} element={<Login/>}/>
      <Route path={ROUTE.CONTACT} element={<Contact/>}/>
      <Route path={ROUTE.EXPERIENCE} element={<Experience/>}/>
      <Route path={ROUTE.USER} element={<User />}/>
      <Route path="*" element={<Navigate to={ROUTE.HOME} />} />
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
