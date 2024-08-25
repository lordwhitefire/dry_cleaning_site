/* eslint-disable no-unused-vars */
import React from 'react';
import FigureCard from '../component/Cards/FigureCard';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer'
import HeroPricingPage from '../component/HeroPricingPage';
import cardData from '../component/Cards/cardData';
import PricingServiceEstimator from '../component/PricingServiceEstimator'


const PricingPage = () => {
  return (
      <div className="relative bg-primaryColor text-lightText">
        {/* Home Page */}
     <Navbar />
     <HeroPricingPage />  
      <FigureCard data={cardData} />
      <PricingServiceEstimator />
     <Footer />
      </div>
  )
}



export default PricingPage;