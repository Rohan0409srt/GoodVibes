import React from "react";
import "./About_us.css";

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about-us-container">
        <h1>About Good Vibes Sales and Service</h1>
        <p>
          Welcome to **Good Vibes Sales and Service**, your go-to destination for premium home decor fabrics. 
          We specialize in offering a wide range of high-quality curtains, wallpapers, and upholstery materials 
          to transform your living spaces.
        </p>

        <h2>Our Mission</h2>
        <p>
          Our mission is to provide customers with stylish and durable home decor solutions. 
          We believe in quality, affordability, and excellent customer service.
        </p>

        <h2>Why Choose Us?</h2>
        <ul id="About_us_ul">
          <li>✅ Premium quality home decor fabrics</li>
          <li id="About_us_li">✅ Affordable pricing with great offers</li>
          <li>✅ Wide variety of designs and textures</li>
          <li>✅ Expert guidance on home styling</li>
        </ul>

        <h2>Contact Us</h2>
        <p className="contact-us">
          If you have any questions or need assistance, feel free to contact us at:
        </p>
        <p className="contact-us">Email: goodvibes.homedecor25@gmail.com</p>
        <p className="contact-us">Phone: +919665070797</p>
      </div>
    </div>
  );
};

export default AboutUs;
