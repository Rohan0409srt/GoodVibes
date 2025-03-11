import React from "react";
import { FaFacebookF, FaYoutube, FaInstagram, FaWhatsapp } from "react-icons/fa";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Get in Touch</h3>
          <p>📍 Good Vibes Sales & Service</p>
          <p>Sr. No 52/1, Shop No 6, Punawale Jambe Road, Koyte Wasti Chowk, Punawale, Pune-411033</p>
          <p>📞 +91 98765 43210</p>
          <p>goodvibes.homedecor25@gmail.com</p>

          {/* Social Media Icons */}
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF size={24} color="#4267B2" />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube size={24} color="#FF0000" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} color="#E1306C" />
            </a>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp size={24} color="#25D366" />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Information</h3>
          <ul>
          <li><Link to="/about_Us">About Us</Link></li>
          <li><Link to="/service">Our Services</Link></li>
          <li><Link to="/Contact_Us">Contact Us</Link></li>
          <li><a href="https://maps.app.goo.gl/YyDjWwmtsFrM1U3Y9">Store Locator</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Our Services</h3>
          <ul>
          <li><Link to="/curtains">Curtains</Link></li>
          <li><Link to="/wallpaper">Wallpapers</Link></li>
          <li><Link to="/BedHeadboards">Bed Headboards</Link></li>
          <li><Link to="/blinds">Blinds</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© Copyright 2025 Good Vibes Sales & Service. All rights reserved.</p>
        <div className="footer-links">
          {/* <a href="/about">About Us</a>
          <a href="/blog">Blog</a>
          <a href="/contact">Contact Us</a>
          <a href="/store-locator">Store Locator</a> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
