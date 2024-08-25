// Progress.js
import React, { useState } from 'react';
import Contact from '../component/bookingSteps/Contact';
import Services from '../component/bookingSteps/Services';
import Date from '../component/bookingSteps/Date';
import Payment from '../component/bookingSteps/Payment';

import { FaUser, FaRegListAlt } from "react-icons/fa";
import { MdOutlineEditCalendar } from "react-icons/md";
import { LuWallet } from "react-icons/lu";

const Progress = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const renderStep = () => {
    if (currentStep === 1) {
      return <Contact />;
    } else if (currentStep === 2) {
      return <Services />;
    } else if (currentStep === 3) {
      return <Date />;
    } else if (currentStep === 4) {
      return <Payment />;
    } else {
      return null;
    }
  };

  const isLastStep = currentStep === 4;

  const handleButtonClick = () => {
    if (isLastStep) {
      // Handle submission
      console.log('Form submitted');
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div className='w-full'>
        <div className="flex items-center justify-center gap-4 bg-black/5  rounded-lg shadow-xl py-4 md:py-6 px-2 md:px-10">
            <div className="flex flex-col items-center ">
                <div className={`h-10 w-10 md:w-14 md:h-14 lg:w-20 lg:h-20 flex items-center justify-center drop-shadow-xl rounded-full ${
                    currentStep >= 1 ? 'bg-midnight' : 'bg-white border border-darkgrey'
                    }`}
                >
                    <FaUser className={`h-5 w-5 md:w-7 md:h-7 lg:w-10 lg:h-10  ${
                        currentStep >= 1 ? 'text-white' : 'text-darkgrey'
                    }`} />
                </div>
                <span className={`text-xs text-center lg:text-base w-16 lg:w-full mt-6 font-semibold  ${
                    currentStep >= 1 ? 'text-midnight' : 'text-darkgrey'
                }`}>Contact Information</span>
            </div>
            <div className='hidden md:flex md:w-20 border border-darkgrey'></div>
            <div className="flex flex-col items-center ">
                <div className={`h-10 w-10 md:w-14 md:h-14 lg:w-20 lg:h-20 flex items-center justify-center drop-shadow-xl rounded-full ${
                    currentStep >= 2 ? 'bg-midnight' : 'bg-white border border-darkgrey'
                    }`}
                >
                    <FaRegListAlt className={`h-5 w-5 md:w-7 md:h-7 lg:w-10 lg:h-10 ${
                        currentStep >= 2 ? 'text-white' : 'text-darkgrey'
                    }`} />
                </div>
                <span className={`text-xs text-center lg:text-base w-16 lg:w-full mt-6 font-semibold  ${
                    currentStep >= 2 ? 'text-midnight' : 'text-darkgrey'
                }`}>Services and Pricing</span>
            </div>
            <div className='hidden md:flex md:w-20 border border-darkgrey'></div>
            <div className="flex flex-col items-center ">
                <div className={`h-10 w-10 md:w-14 md:h-14 lg:w-20 lg:h-20 flex items-center justify-center drop-shadow-xl rounded-full ${
                    currentStep >= 3 ? 'bg-midnight' : 'bg-white border border-darkgrey'
                    }`}
                >
                    <MdOutlineEditCalendar className={`h-5 w-5 md:w-7 md:h-7 lg:w-10 lg:h-10  ${
                        currentStep >= 3 ? 'text-white' : 'text-darkgrey'
                    }`} />
                </div>
                <span className={`text-xs text-center lg:text-base w-16 lg:w-full mt-6 font-semibold  ${
                    currentStep >= 3 ? 'text-midnight' : 'text-darkgrey'
                }`}>Pickup Date/Time</span>
            </div>
            <div className='hidden md:flex md:w-20 border border-darkgrey'></div>
            <div className="flex flex-col items-center ">
                <div className={`h-10 w-10 md:w-14 md:h-14 lg:w-20 lg:h-20 flex items-center justify-center drop-shadow-xl rounded-full ${
                    currentStep >= 4 ? 'bg-midnight' : 'bg-white border border-darkgrey'
                    }`}
                >
                    <LuWallet className={`h-5 w-5 md:w-7 md:h-7 lg:w-10 lg:h-10  ${
                        currentStep >= 4 ? 'text-white' : 'text-darkgrey'
                    }`} />
                </div>
                <span className={`text-xs text-center lg:text-base w-20 lg:w-full mt-6 font-semibold  ${
                    currentStep >= 4 ? 'text-midnight' : 'text-darkgrey'
                }`}>Payment and Delivery</span>
            </div>
        </div>

      <div className="flex justify-center mt-4">
        {renderStep()}
      </div>
      <div className="flex gap-2 mt-4">
        {currentStep > 1 && (
          <button
            onClick={() => setCurrentStep(currentStep - 1)}
            className="bg-white hover:bg-midnight hover:text-white text-midnight border border-midnight font-bold py-2 px-4 rounded"
          >
            Previous
          </button>
        )}
          <button
            onClick={handleButtonClick}
            className={`${
                isLastStep ? 'bg-green' : 'bg-midnight'
            }  hover:px-6 text-white font-medium hover:font-bold py-2 px-4 rounded`}
            >
            {isLastStep ? 'Proceed' : 'Next'}
            </button>
      </div>
    </div>
  );
};

export default Progress;
