import React from 'react';
import "./Service.css";
import servicesData from '../assets/servicesData';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Service = () => {
  const navigate = useNavigate();

  // Function to handle navigation when "Read More" is clicked
  const handleReadMore = (serviceName) => {
    if (["Wallpapers Sales", "Bed_headboards Sales", "Blinds Sales", "curtains Sales"].includes(serviceName)) {
      navigate("/Wallpaper");
    }
  };

  return (
    <div className="service-page">
      <div className="service-header">
        <h1>Our Services</h1>
        <p>We provide top-notch solutions tailored to your business needs.</p>
      </div>
      <hr />
      <div className="service-list">
        {servicesData.length > 0 ? (
          servicesData.map((service) => (
            <div className="service-card" key={service.id}>
              <img src={service.image} alt={service.name} className="service-image" />
              <h2 className="service-title">{service.name}</h2>
              <ul className="service-description">
                {service.features.map((feature, index) => (
                  <li key={index}>&#10003; {feature}</li>
                ))}
              </ul>

              {/* Conditional Button Rendering */}
              {service.name === "Bed_headboards Sales" ? (
                <Link to="/Bedheadboards">
                  <button className="service-button">See More</button>
                </Link>
              ) : service.name === "curtains Sales" ? (
                <Link to="/Curtains">
                  <button className="service-button">See More</button>
                </Link>
              ) : service.name === "Blinds Sales" ? (
                <Link to="/Blinds">
                  <button className="service-button">See More</button>
                </Link>
              ) : (
                <Link to="/Wallpaper">
                  <button className="service-button">See More</button>
                </Link>
              )}
            </div>
          ))
        ) : (
          <p className="loading-message">Loading services...</p>
        )}
      </div>
    </div>
  );
};

export default Service;
