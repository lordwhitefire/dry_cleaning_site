import React, { useState } from 'react';
import ServicePricingImage from '../assets/ServicePricing.png';
import cardData from './Cards/cardData'; // Import cardData array

const ServicePricing = () => {




    const initialItem = cardData[0];
    const initialItems = new Array(4).fill(initialItem);
    const initialQuantities = new Array(initialItems.length).fill(0);
  
    const [selectedItemIndex, setSelectedItemIndex] = useState(0);
    const [items, setItems] = useState(initialItems);
    const [quantities, setQuantities] = useState(initialQuantities);
    const [totalAmounts, setTotalAmounts] = useState(new Array(initialItems.length).fill(0));
    const [totalAmountB, setTotalAmountB] = useState(0);
  
    const handleItemSelect = (index, event) => {
        const newItems = [...items];
        newItems[index] = event.target.value;
        const  index1 = event.target.value;
        setItems(newItems);
        setSelectedItemIndex(index1);
        console.log("Selected Item Index:", event.target.value);
        console.log("Selected Item Value:", event.target.value);
      };
      
  
    const handleQuantityChange = (index, event) => {
      const newQuantities = [...quantities];
      newQuantities[index] = parseInt(event.target.value);
      setQuantities(newQuantities);
    };
  
    const handleOptionClick = (cardIndex) => {
        console.log("Selected Card Index:", cardIndex);
      };
      
  
  const calculateTotalAmountA = (index, event) => {
    
    const selectedItem = cardData[selectedItemIndex]; // Get the selected item object from the newItems array
    console.log("Selected Item:", selectedItem); // Log the selected item to console
    console.log("Quantity:", quantities[index]); // Log the quantity to console
    const totalAmount = selectedItem.price * quantities[index]; // Calculate the total amount using the price from the selected item
    console.log("Total Amount A:", totalAmount); // Log the calculated total amount to console
    return totalAmount;
};

  

  // Function to calculate total amount B
  const calculateTotalAmountB = () => {
    let sum = 0;
    for (let i = 0; i < totalAmounts.length ; i++) {
      sum += totalAmounts[i];
    }
    return sum;
  };

  // Function to handle form submission
  const handleSubmit = (index) => {
    const totalAmountA = calculateTotalAmountA(index);
    const newTotalAmounts = [...totalAmounts];
    newTotalAmounts[index] = totalAmountA;
    setTotalAmounts(newTotalAmounts);

   
  };

  const handleSeeTotal = () => {
    const totalAmountB = calculateTotalAmountB();
    setTotalAmountB(totalAmountB);
    showAlert(`Total Amount B: ₦ ${totalAmountB}`);
  };
  
  const showAlert = (message) => {
    alert(message);
  };
  
  // Function to handle adding new item
  const handleAddItem = () => {
    const newItemIndex = items.length; // Index for the new item
    const newItems = [...items, { name: '', price: 50 }];
    const newQuantities = [...quantities, 1];
    const newTotalAmounts = [...totalAmounts, 0];
    setItems(newItems);
    setQuantities(newQuantities);
    setTotalAmounts(newTotalAmounts);
  };

  // Render component
  return (
    <div className="grid relative bg-alight py-16 mb-8 overflow-hidden grid-cols-1 md:grid-cols-8 gap-4">
      {/* Division A */}
      <div className="bg-gray-100 flex col-span-3 ml-6  flex-col items-center p-4 rounded-lg">
        <h2 className="text-[1.4rem] lg:text-[2.2rem] 2xl:text-[3.2rem] mb-6 text-[#3938FF] text-nowrap text-center font-bold mb-2">Take the Guesswork Out <br /> of Laundry Costs</h2>
        <p className='text-[#646468] text-[1.2rem] lg:text-[1.6rem] 2xl:text-[2.4rem]'>Try Our Price Estimator!</p>
        <img src={ServicePricingImage} alt="Laundry" className="mt-4 w-[20rem]" />
      </div>
      {/* Division B */}
      <div className=" col-span-5 bg-awhite m-10 flex flex-col items-center p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Service Pricing</h2>
        <div className="grid grid-cols-1 items-between  gap-8 md:grid-cols-2">
          {/* Division C */}
          <div className='flex flex-col  gap-y-4'>
            <h3 className="text-xl text-[#646468] ml-[1rem] font-bold mb-2">Item Per Price</h3>
            {items.map((item, index) => (
              <div key={index} className="flex flex-nowrap">
                <select
                  value={items[index]}
                  onChange={(event) => handleItemSelect(index, event)}
                  className="inline-block w-[15rem] border border-awhite rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-transparent"
                >
                 {cardData.map((card, cardIndex) => (
  <option 
    key={cardIndex} 
    value={card.id} 
    onClick={() => handleOptionClick(cardIndex)}
  >
    {card.title}
  </option>
))}

                </select>
                <input
                  type="number"
                  value={quantities[index]}
                  onChange={(event) => handleQuantityChange(index, event)}
                  className="inline-block w-[6rem] border border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />


              </div>
            ))}
 
          </div>
          {/* Division D */}
<div className='flex flex-col items-end pr-6 gap-y-6'>
  <h3 className="text-lg font-bold mb-2">....</h3>
  {items.map((item, index) => (
   <div className=''>
     <button
      key={index}
      onClick={() => handleSubmit(index)}
      className="w-[12rem] block border border-gray-300 rounded-md px-4 py-2  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    >
      {totalAmounts[index] > 0 ? `₦ ${totalAmounts[index]}` : "See Prices"}
    </button>
   </div>
  ))}
</div>

        </div>
            {/* Division F */}
      <div className=" w-[21rem] lg:w-[45rem] mt-8  grid grid-cols-1 lg:grid-cols-2 items-between py-4 px-16 gap-x-[2rem] rounded-lg">
        <button
          onClick={handleAddItem}
          className="lg:py-[0.1rem] text-nowrap py-[0.5rem]  lg:px-[1rem] text-[1.4rem] bg-[#0100BB] rounded-[0.7rem] text-[#FEFEFE]"
        >
          Add Item
        </button>
        <button
  onClick={handleSeeTotal}
  className="lg:py-[0.1rem] lg:px-[1rem] mt-4 lg:mt-0  py-[0.5rem] text-[1.4rem] bg-[#0100BB] rounded-[0.7rem] text-[#FEFEFE]"
>
  See Total
</button>

      </div>
      </div>
      <div className='absolute z-0 overflow-hidden lg:top-[31rem] 2xl:top-[34rem] w-[45rem] py-[3rem] flex'>
            <div className='lg:h-[6rem] h-[3rem] z-20 lg:w-[6rem] w-[3rem] relative lg:top-[10rem] -top-[3.1rem] lg:left-[0rem] -left-[0.7rem] rounded-full opacity-50 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#F4F4F6] via-[#C6C6FA]  to-[#9291FE]'></div>
            <div className='lg:h-[9rem] h-[4.5rem] z-10 lg:w-[9rem] w-[4.5rem] relative lg:top-[4rem] -top-[0.5rem] lg:-left-[2rem] -left-[4.2rem] rounded-full opacity-30 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#F4F4F6] via-[#C6C6FA]  to-[#9291FE]'></div>
             <div className='lg:h-[12rem] h-[8rem] z-0 lg:w-[12rem] w-[8rem] relative lg:top-[1rem] -top-[4.5rem] lg:-left-[17rem] -left-[6.2rem] rounded-full opacity-30 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#F4F4F6] via-[#C6C6FA]  to-[#ffffff]'></div>
             </div >
    </div>
  );
};

export default ServicePricing;
