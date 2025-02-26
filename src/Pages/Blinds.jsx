import React from 'react';
import './CSS/Blinds.css';

const Blinds = () => {
  return (
    <div className="blinds-page">
      <h1>Blinds Collection</h1>
      <p>Explore our stylish and functional collection of blinds, perfect for any room in your home.</p>
      <div className="blinds-gallery">
        <img src={require('../Components/assets/service_imges/Blinds/Img1.jpg')} alt="Blind 1" />
        <img src={require('../Components/assets/service_imges/Blinds/Img2.jpg')} alt="Blind 2" />
        <img src={require('../Components/assets/service_imges/Blinds/Img3.jpg')} alt="Blind 3" />
        <img src={require('../Components/assets/service_imges/Blinds/Img4.jpg')} alt="Blind 4" />
        <img src={require('../Components/assets/service_imges/Blinds/Img5.jpg')} alt="Blind 5" />
        <img src={require('../Components/assets/service_imges/Blinds/Img6.jpg')} alt="Blind 6" />
        <img src={require('../Components/assets/service_imges/Blinds/Img7.jpg')} alt="Blind 7" />
        <img src={require('../Components/assets/service_imges/Blinds/Img8.jpg')} alt="Blind 8" />
      </div>
    </div>
  );
};

export default Blinds;