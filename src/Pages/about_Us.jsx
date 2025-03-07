import React from "react";
import Navbar from "../Components/Navbar/Navbar";  // Import Navbar
import Footer from "../Components/Footer/Footer"; // Import Footer
import "./CSS/AboutUs.css";  // Import CSS for styling

const AboutUs = () => {
  return (
    <div>
     

      <div className="about-us-container">
        <div className="about-us-header">
          <h1>About Good Vibes</h1>
          <p>Discover who we are, our journey, and why we create good vibes in every space.</p>
        </div>

        <div className="about-us-content">
          <section className="company-history">
            <h2>Our Story</h2>
            <p>
              Good Vibes was founded with the idea of transforming everyday spaces into places that inspire positivity, comfort, and joy. Our goal is to help you create environments that not only look good but also make you feel great. We pride ourselves on offering high-quality products and excellent craftsmanship that will make your home or workspace feel just right.
            </p>
            <p>
              Our team consists of experienced designers, craftsmen, and customer service professionals who are dedicated to providing a unique experience. Whether you need expert design advice or a complete makeover, Good Vibes is here to help you every step of the way.
            </p>
          </section>

          <section className="our-vision">
            <h2>Our Vision</h2>
            <p>
              At Good Vibes, our vision is to be the go-to destination for creating spaces filled with positive energy and beautiful designs. We are committed to providing our clients with the best in furniture, home decor, and personalized services. Our mission is to inspire people to live in environments that uplift their spirits and foster well-being.
            </p>
          </section>

          <section className="our-values">
            <h2>Our Values</h2>
            <ul>
              <li><strong>Positivity:</strong> We believe that good design can foster a positive and uplifting environment.</li>
              <li><strong>Quality:</strong> We provide products that are made with high-quality materials and craftsmanship.</li>
              <li><strong>Customer Focus:</strong> We prioritize our customers' needs and strive to exceed their expectations.</li>
              <li><strong>Innovation:</strong> We embrace new trends and fresh ideas in the world of design.</li>
              <li><strong>Integrity:</strong> We are committed to honesty, transparency, and delivering on our promises.</li>
            </ul>
          </section>

        
        </div>
      </div>

      <Footer />  {/* Add Footer here */}
    </div>
  );
};

export default AboutUs;
