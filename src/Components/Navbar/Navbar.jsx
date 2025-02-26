import React, { useState } from 'react';
import './Navbar.css';
import logo from "../assets/logo.jpg";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menu, setMenu] = useState("Home");
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <div className="navbar">
      <div className="nav_logo">
        <img src={logo} alt="Company Logo" style={{ height: 89 }} />
        <h3>Good Vibes</h3>
      </div>
      
      <div className={`nav-menu ${isMobile ? "mobile" : ""}`}>
        <ul>
          <li onClick={() => setMenu("Home")}><Link to={'/'}>Home</Link> {menu === "Home" ? <hr /> : <></>}</li>
          <li onClick={() => setMenu("Services")}><Link to={'/Service'}>Services</Link> {menu === "Services" ? <hr /> : <></>}</li>
          <li onClick={() => setMenu("About_us")}><Link to={'/About_us'}>About Us</Link> {menu === "About_us" ? <hr /> : <></>}</li>
          <li onClick={() => setMenu("Contact_Us")}><Link to={'/Contact_Us'}>Contact Us</Link> {menu === "Contact_Us" ? <hr /> : <></>}</li>
        </ul>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </div>
  );
};

export default Navbar;
