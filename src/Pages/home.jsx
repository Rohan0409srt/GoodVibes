import React from 'react'
import Hero from '../Components/Hero/Hero'
import Service from '../Components/Service/Service'
import AboutUs from '../Components/About_us/About_us'
// import Offers from '../Components/Offers/Offers'
import Footer from '../Components/Footer/Footer'


const home = () => {
  return (
    <div>
         <Hero />
         <Service />
         <AboutUs />
         {/* <Offers /> */}
         <Footer />
       </div>
  )
}

export default home
