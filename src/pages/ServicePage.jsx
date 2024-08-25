/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer'
import ServiceBanner from '../component/ServicesBanner';
import ServiceDryCleaning from '../component/ServiceDryCleaning';
import OurServices  from "../component/OurServices"
import Testimonial1 from '../component/Testimonial1';

const ServicePage = () => {
  return (
      <div className="relative bg-primaryColor text-lightText">
        {/* Home Page */}
     <Navbar />
     <ServiceBanner />  
      <ServiceDryCleaning />
      <OurServices />
      <Testimonial1 />
     <Footer />
      </div>
  )
}



export default ServicePage;