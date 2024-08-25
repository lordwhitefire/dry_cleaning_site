import React from 'react';
import basketImage from '../assets/basket.png';
import shirtImage from '../assets/shirt.png';
import washingImage from '../assets/washing.png';
import ironImage from '../assets/iron.png';
import pickUpImage from '../assets/pickup.png';

const OurServices = () => {
  const serviceData = [
    {
      id: 1,
      image: basketImage,
      alt: 'Image 1',
      title: 'Laundry',
      description: 'Our laundry services offer convenient solution for customers lookingto maintain their everyday clothing items. We handle everything from basic washing to specialized care instructions, ensuring your garments  are cleaned, refreshed, and returned in pristine condition.',
    },
    {
      id: 2,
      image: shirtImage,
      alt: 'Image 2',
      title: 'Dry Cleaning',
      description: 'Our dry cleaning services offer a specialized cleaning process fordelicate and non-washable items, including suits, formal wear,and delicate fabrics. We use environmentally-friendly solventsand expert techniques to safely and effectively clean, deodorize,and restore your garments to their original conditon.',
    },
    {
      id: 3,
      image: washingImage,
      alt: 'Image 3',
      title: 'Washing',
      description: 'Our washing services cater to variety of fabrics and clothing types, utilizing gentle yet effective cleaning techniques to remove dirt, stains, and odors. We prioritize quality and care in every wash cycle, ensuring your clothing looks and feels it’s best after each cleaning.',
    },
    {
      id: 4,
      image: ironImage,
      alt: 'Image 4',
      title: 'Ironing',
      description: 'With our professional ironing services, we take the hassle out of maintaining wrinkle-free clothing. Our skilled team carefully presses and finishes each item, delivering crisp, professional results that enhance the appearance and longevity of your clothing.',
    },
    {
      id: 5,
      image: pickUpImage,
      alt: 'Image 5',
      title: 'Pickup/Delivery',
      description: 'Our delivery services offer convenient pick-up and drop-off options for laundry, ironing, washing, and dry cleaning, ensuring timely, and secure transportation of your garments right to your doorstep',
    },
  ];

  return (
    <div>
    <div className='flex relative overflow-hidden bg-[#ECF0F5] mt-[1rem] justify-center'>
      <div className='flex flex-col px-[1rem] rounded-[0.5rem]  pb-[5rem] my-[2rem] lg:my-[3rem] lg:w-[66rem] w-full items-center'>
        <h1 className='text-[#0100BB] text-[2.5rem] px-[2rem]  lg:pb-[6rem] pb-[3rem] font-semibold'>Our Services</h1>
        <div className="grid grid-cols-2 gap-y-4 lg:grid-cols-6 lg:gap-8">
          {serviceData.map((item, index) => (
            <div className={`p-4 rounded-t-[0.5rem] bg-awhite flex flex-col justify-center items-center w-[20rem] h-[18rem] ${index == 3 ? 'col-span-2 lg:col-start-2' : 'col-span-2 '}`} key={item.id}>
              <div className='w-[8rem] h-[6rem] shadow-2xl bg-awhite flex justify-center items-center'><img src={item.image} alt={item.alt} className="w-[4.5rem] h-[4.5rem] mb-2 object-cover" /></div>
              <div className='flex flex-col py-[1rem] items-center bg-white rounded-b-[0.5rem]'>
                <h2 className="text-2xl mb-4 text-amidnight font-bold">{item.title}</h2>
                <p className="text-xs text-center">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
       
      </div>
      <div className='absolute z-0 top-[42rem] w-full justify-end py-[3rem] flex'>
      <div className='lg:h-[12rem] h-[8rem] z-10 lg:w-[12rem]  w-[8rem] relative lg:left-[12rem] left-[8.1rem] top-[55.6rem] lg:top-0 rounded-full opacity-30 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#F4F4F6] via-[#C6C6FA]  to-[#9291FE]'></div>
     <div className='lg:h-[9rem] h-[6rem] z-0 lg:w-[9rem] w-[6rem] relative lg:top-[0.5rem] top-[56.0rem] lg:left-[6rem] left-[5rem] rounded-full opacity-30 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#F4F4F6] via-[#C6C6FA]  to-[#9291FE]'></div>
     <div className='lg:h-[6rem] h-[4rem] z-20 lg:w-[6rem] w-[4rem] relative lg:top-[9rem] top-[62rem] rounded-full opacity-60 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#F4F4F6] via-[#C6C6FA]  to-[#9291FE]'></div>
     <div className='lg:h-[2rem] h-[1.3rem] z-20 lg:w-[2rem] w-[1.3rem] relative lg:top-[10rem] top-[62rem] lg:right-[15rem] right-[11rem] rounded-full opacity-60 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#F4F4F6] via-[#C6C6FA]  to-[#9291FE]'></div>
     <div className='lg:h-[1rem] h-[0.75rem] z-20 lg:w-[1rem] w-[0.75rem] relative lg:top-[12rem] top-[63rem] lg:right-[18rem] right-[14rem] rounded-full opacity-60 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#F4F4F6] via-[#C6C6FA]  to-[#9291FE]'></div>
     
   </div>
    </div>
   
   </div>
  );
};

export default OurServices;
