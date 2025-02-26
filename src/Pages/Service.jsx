import React from "react";
import Navbar from "../Components/Navbar/Navbar"; // Import Navbar
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./CSS/Service.css";
import servicesData from "../Components/assets/servicesData";
import Footer from "../Components/Footer/Footer";

const Service = () => {
  return (
    <div>
      {/* <Navbar />  Add Navbar here */}
      
      <div className="service-page1">
        <div className="service-header">
          <h1>Our Services And Products</h1>
          <p>Explore the range of products and services we offer.</p>
        </div>

        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          slidesPerView={3} // Default: 3 slides per view
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1 },  // 1 slide for screens below 768px
            768: { slidesPerView: 2 },  // 2 slides for screens >= 768px
            1024: { slidesPerView: 3 }, // 3 slides for screens >= 1024px
          }}
        >
          {servicesData.map((service) => (
            <SwiperSlide key={service.id}>
              <div className="service-card">
                <img src={service.image} alt={service.name} className="service-image" />
                <h2 className="service-title">{service.name}</h2>
                <p className="service-description">{service.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <h2>Why Choose Us?</h2>
        <p>✔ Skilled Craftsmanship – Experienced professionals ensuring high-quality repairs. <br />
        ✔ Premium Materials – Choose from a variety of luxury fabrics, leather, and foam.<br />
        ✔ Affordable Pricing – Cost-effective solutions without compromising quality.<br />
        ✔ On-Site & Pickup Service – Hassle-free repair at your home or our workshop.<br />
        ✔ Fast Turnaround – Get your sofa looking brand new in no time!</p>
        
        <Footer />
      </div>
    </div>
  );
};

export default Service;
