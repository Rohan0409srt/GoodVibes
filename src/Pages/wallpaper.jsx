import React from 'react';
import './CSS/Wallpaper.css'
import Footer from '../Components/Footer/Footer';

const Wallpaper = () => {
  return (
    <div className="wallpaper-page">
      <h1>Wallpaper Sales</h1>
      <p>Explore our wide range of stylish wallpapers for every room in your home!</p>
      <div className="wallpaper-gallery">
        {/* Correct image paths based on folder structure */}
        <img src={require('../Components/assets/service_imges/Wallpapers/Img1.jpg')} alt="Wallpaper 1" />
        <img src={require('../Components/assets/service_imges/Wallpapers/Img2.jpg')} alt="Wallpaper 2" />
        <img src={require('../Components/assets/service_imges/Wallpapers/Img3.jpg')} alt="Wallpaper 3" />
        <img src={require('../Components/assets/service_imges/Wallpapers/Img4.jpg')} alt="Wallpaper 3" />
        <img src={require('../Components/assets/service_imges/Wallpapers/Img5.jpg')} alt="Wallpaper 3" />
        <img src={require('../Components/assets/service_imges/Wallpapers/Img6.jpg')} alt="Wallpaper 3" />
        <img src={require('../Components/assets/service_imges/Wallpapers/Img7.jpg')} alt="Wallpaper 3" />
        <img src={require('../Components/assets/service_imges/Wallpapers/Img3.jpg')} alt="Wallpaper 3" />

      </div>

    </div>
  );
};

export default Wallpaper;
