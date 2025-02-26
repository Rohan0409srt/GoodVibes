import React from 'react';
import './CSS/BedHeadboards.css';

const BedHeadboards = () => {
  return (
    <div className="bedheadboards-page">
      <h1>Bed Headboards Collection</h1>
      <p>Discover our exquisite collection of bed headboards, designed to enhance your bedroom aesthetic.</p>
      <div className="bedheadboards-gallery">
        <img src={require('../Components/assets/service_imges/Bedheadboards/Img1.jpg')} alt="Headboard 1" />
        <img src={require('../Components/assets/service_imges/Bedheadboards/Img2.jpg')} alt="Headboard 1" />
        <img src={require('../Components/assets/service_imges/Bedheadboards/Img3.jpg')} alt="Headboard 1" />
        <img src={require('../Components/assets/service_imges/Bedheadboards/Img4.jpg')} alt="Headboard 1" />
        <img src={require('../Components/assets/service_imges/Bedheadboards/Img5.jpg')} alt="Headboard 1" />
        <img src={require('../Components/assets/service_imges/Bedheadboards/Img6.jpg')} alt="Headboard 1" />
        <img src={require('../Components/assets/service_imges/Bedheadboards/Img7.jpg')} alt="Headboard 1" />
        <img src={require('../Components/assets/service_imges/Bedheadboards/Img8.jpg')} alt="Headboard 1" />

       
      </div>
    </div>
  );
};

export default BedHeadboards;
