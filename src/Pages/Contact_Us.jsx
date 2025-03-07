import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaFacebookF, FaYoutube, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import './CSS/ContactUs.css';
import Footer from '../Components/Footer/Footer';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: ''
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('GoodVibes25', 'template_sv0303p', formData, 'oQqDUvjmwYyd_rr4b')
      .then(() => {
        setShowPopup(true);
        setFormData({ from_name: '', from_email: '', message: '' });
      })
      .catch((error) => {
        console.error('❌ Email failed to send:', error);
        alert('⚠️ There was an issue sending your message. Please try again.');
      });
  };

  const closePopup = () => setShowPopup(false);

  return (
    <div>
      <div className="Contact-container">
        <h1>Contact Us</h1>
        <p>Have a question or need assistance? Get in touch with us.</p>

        <div className="contact-layout">
          <div className="get-in-touch">
            <h2>Get in Touch</h2>
            <p><strong>Address:</strong> Sr. No 52/1, Shop No 6, Punawale Jambe Road, Pune - 411033</p>
            <p><strong>Phone:</strong> +91 98765 43210</p>
            <p><strong>Email:</strong> goodvibes.homedecor25@gmail.com</p>

            <div className="social-icons">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF size={30} color="#4267B2" />
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                <FaYoutube size={30} color="#FF0000" />
              </a>
              <a href="https://www.instagram.com/good_vibes_home_decor" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={30} color="#E1306C" />
              </a>
              <a href="https://wa.me/9665070797" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp size={30} color="#25D366" />
              </a>
            </div>
          </div>

          <div className="Contact-form">
            <h2>Send Us a Message</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                value={formData.from_name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                value={formData.from_email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>🎉 Success!</h2>
            <p>Your message has been sent successfully. We'll get back to you soon.</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default ContactUs;