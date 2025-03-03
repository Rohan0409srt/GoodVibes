import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

const Navbar = () => {
  const [menu, setMenu] = useState("Home");
  const [isMobile, setIsMobile] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    
    // Send Email with EmailJS
    emailjs
      .send(
        "GoodVibes25", // Replace with EmailJS Service ID
        "template_oy6w6bs", // Replace with EmailJS Template ID
        formData,
        "oQqDUvjmwYyd_rr4b" // Replace with EmailJS Public Key
      )
      .then(
        (response) => {
          console.log("Email sent successfully!", response.status, response.text);
          alert("Your quotation request has been sent via Email !");
        },
        (error) => {
          console.log("Failed to send email...", error);
          alert("Something went wrong. Please try again.");
        }
      );

    // Close form & Reset fields
    setShowForm(false);
    setFormData({ name: "", phone: "", email: "", service: "", message: "" });
  };

  return (
    <div className="navbar">
      <div className="nav_logo">
        <img src={logo} alt="Company Logo" style={{ height: 89 }} />
        <h3>Good Vibes</h3>
      </div>

      <div className={`nav-menu ${isMobile ? "mobile" : ""}`}>
        <ul>
          <li onClick={() => setMenu("Home")}>
            <Link to={"/"}>Home</Link> {menu === "Home" ? <hr /> : <></>}
          </li>
          <li onClick={() => setMenu("Services")}>
            <Link to={"/Service"}>Services</Link> {menu === "Services" ? <hr /> : <></>}
          </li>
          <li onClick={() => setMenu("About_us")}>
            <Link to={"/About_us"}>About Us</Link> {menu === "About_us" ? <hr /> : <></>}
          </li>
          <li onClick={() => setMenu("Contact_Us")}>
            <Link to={"/Contact_Us"}>Contact Us</Link> {menu === "Contact_Us" ? <hr /> : <></>}
          </li>
          <li>
            <button className="quotation-btn" onClick={toggleForm}>
              Get Your Quotation
            </button>
          </li>
        </ul>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      {/* Popup Form */}
      {showForm && (
        <div className="popup-form">
          <div className="form-container">
            <h2>Get a Quotation</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Your Name" required onChange={handleChange} />
              <input type="tel" name="phone" placeholder="Phone Number" required onChange={handleChange} />
              <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
              <select name="service" required onChange={handleChange}>
                <option value="">Select a Service</option>
                <option value="Sofa Repairing">Sofa Repairing</option>
                <option value="Curtains Sales">Curtains Purchase</option>
                <option value="Bed Headboard Sales">Bed Headboard Purchase</option>
                <option value="Blinds Sales">Blinds Purchase</option>
                <option value="Wallpaper Sales">Wallpaper Purchase</option>
              </select>
              <textarea name="message" placeholder="Your Message" required onChange={handleChange}></textarea>
              <button type="submit">Submit</button>
            </form>
            <button className="close-btn" onClick={toggleForm}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
