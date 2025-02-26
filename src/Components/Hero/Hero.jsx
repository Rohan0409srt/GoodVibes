import React from 'react';
import './Hero.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import banner1 from "../assets/f1.jpg";
import banner2 from "../assets/f2.jpg";
import banner3 from "../assets/f3.jpg";
import banner4 from "../assets/f4.jpg";

function Hero() {
  const images = [banner1, banner2, banner3, banner4];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="hero-container">
      <div className="rainbow-bg">
        <div className="hero-content">
          <h2>Welcome to Good Vibes</h2>
          <p>Delivering Excellence & Innovation</p>
        </div>
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index} className="slide">
              <img src={img} alt={`Slide ${index + 1}`} className="slide-img" />
            </div>
          ))}
        </Slider>
        <div className="hero-button">
          <button>Discover More</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
