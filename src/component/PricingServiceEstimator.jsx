import React, { useState } from 'react';
import cardData from './Cards/cardData'; // Import cardData array
import TotalEstimatePopup from './TotalEstimatePopup'; // Import the TotalEstimatePopup component

const PricingServiceEstimator = () => {
  const [categories, setCategories] = useState([{ id: '', quantity: 1 }]); // Initial state for categories
  const [service, setService] = useState('laundry'); // Initial state for service
  const [showPopup, setShowPopup] = useState(false); // State for showing/hiding popup
  const [totalEstimate, setTotalEstimate] = useState(0); // State for total estimate

  // Function to handle adding a new category
  const handleAddCategory = () => {
    setCategories([...categories, { id: '', quantity: 1 }]);
  };

  // Function to handle changing category
  const handleCategoryChange = (index, value) => {
    const updatedCategories = [...categories];
    updatedCategories[index].id = value;
    setCategories(updatedCategories);
  };

  // Function to handle changing quantity
  const handleQuantityChange = (index, value) => {
    const updatedCategories = [...categories];
    updatedCategories[index].quantity = value;
    setCategories(updatedCategories);
  };

  // Function to handle changing service
  const handleServiceChange = (value) => {
    setService(value);
  };

  // Function to calculate total estimate
  const calculateTotalEstimate = () => {
    let total = 0;
    console.log("Categories:", categories);
    console.log("Card Data:", cardData);
// Transform cardData array into an object with IDs as keys
const cardDataMap = cardData.reduce((acc, item) => {
    acc[item.id] = item;
    return acc;
  }, {});
  
  // Now you can use category.id as an index to source the corresponding item
  categories.forEach((category) => {
    const selectedCategory = cardDataMap[category.id];
    console.log("Category ID:", category.id);
    console.log("Selected Category:", selectedCategory);
    if (selectedCategory) {
      total += selectedCategory.price * category.quantity;
    }
  
    });
    console.log("Total Estimate:", total);
    return total;
  };
  

  // Function to handle 'See Total Estimate' button click
  const handleSeeTotalEstimate = () => {
    // Check if at least one category, quantity, and service are selected
    const isValid = categories.every((category) => category.id !== '' && category.quantity !== 0) && service !== '';
  
    if (isValid) {
      const totalEstimate = calculateTotalEstimate();
      console.log('Total Estimate:', totalEstimate);
     
      
      setTotalEstimate(totalEstimate);
      setShowPopup(true);
    } else {
      setShowPopup(false);
    }
  };

  // Function to handle closing the popup
  const handleClosePopup = () => {
    console.log("Closing popup..."); // Add a console.log message
    setShowPopup(false);
    console.log('Total Estimate:', totalEstimate);
  };
  

  return (
    <div className='bg-[#ECF0F5]  flex items-center justify-center w-full'>
      <div className='bg-awhite px-[2rem] lg:my-[7rem] my-[4rem] py-[3rem] w-[19rem] lg:w-[50rem]'>
        {/* Header Component */}
        <h1 className='text-[#0100BB] mb-4 lg:text-[1.7rem] text-[1.4rem] lg:px-[2rem] py-[1rem] font-medium'> Service Price Estimator</h1>

        {/* Div A */}
        <div className='flex flex-col lg:flex-row justify-around lg:w-[40rem]'>
          {/* Div B */}
          <div>
            <h2 className='mb-[1.5rem] font-medium text-[1.2rem] '>Item</h2>
            {categories.map((category, index) => (
              <div className='flex flex-col gap-y-[0.5rem]' key={index}>
                <select value={category.id} className="mb-4 rounded-lg border " onChange={(e) => handleCategoryChange(index, e.target.value)}>
                  <option value="">Select a category</option>
                  {cardData.map((item) => (
                    <option key={item.id} value={item.id}>{item.category}</option>
                  ))}
                </select>
                {index === categories.length - 1 && <button onClick={handleAddCategory}><span className="icon-[ic--round-plus] h-[1.4rem] w-[1.4rem] "></span></button>}
              </div>
            ))}
          </div>

          {/* Div C */}
          <div>
            <h2 className='mb-[1.5rem] font-medium  text-[1.2rem] '>Quantity</h2>
            {categories.map((category, index) => (
              <div key={index}>
                <input type="number" value={category.quantity} className="mb-4 rounded-lg border w-[15rem] lg:w-[10rem]" onChange={(e) => handleQuantityChange(index, e.target.value)} />
              </div>
            ))}
          </div>

          {/* Div D */}
          <div>
            <h2 className='mb-[1.5rem] font-medium text-[1.2rem] '>Service</h2>
            <select value={service} className="mb-4 rounded-lg border lg:w-[10rem] w-[15rem]" onChange={(e) => handleServiceChange(e.target.value)}>
              <option value="laundry">Laundry</option>
              {/* Add more options as needed */}
            </select>
          </div>
        </div>

        {/* See Total Estimate Button */}
        {showPopup ? (
          <TotalEstimatePopup totalEstimate={totalEstimate} onClose={handleClosePopup} />
        ) : (
          <button onClick={handleSeeTotalEstimate} className="text-awhite bg-[#0100BB] hover:text-white px-12 lg:ml-[2rem] py-2 rounded-md text-sm text-lg mt-4 font-medium">See Total Estimate</button>
          
        )}
      </div>
    </div>
  );
};

export default PricingServiceEstimator;