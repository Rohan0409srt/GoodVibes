import React from 'react';
import './CSS/Curtains.css';

const Curtain = () => {
  return (
    <div className="curtains-page">
      <h1>Curtains Collection</h1>
      <p>Explore our elegant and versatile collection of curtains, perfect for enhancing any room's ambiance.</p>
      <div className="curtains-gallery">
        {[
          'Img1.jpg', 'Img2.jpg', 'Img3.jpg',
          'Img4.jpg',  'Img6.jpg', 'Img7.jpg'
        ].map((img, index) => (
          <div key={index} className="curtain-card">
            <img
              src={require(`../Components/assets/service_imges/Curtains/${img}`)}
              alt={`Curtain ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Curtain;
