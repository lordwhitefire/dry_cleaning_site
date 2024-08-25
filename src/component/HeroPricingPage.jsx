import React from 'react'
import '../index.css'

const HeroPricingPage = () => {
  return (
    <div className='bg-[#ECF0F5] w-full h-[39rem] lg:h-[45rem] '>
       <div className='absolute z-0 overflow-hidden  py-[3rem] flex'>
              <div className='lg:h-[6rem] h-[3rem] z-20 lg:w-[6rem] w-[3rem] relative lg:-top-[5.7rem] -top-[3.1rem] lg:-left-[2.9rem] -left-[1.3rem] rounded-full opacity-50 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#F4F4F6] via-[#C6C6FA]  to-[#9291FE]'></div>
              <div className='lg:h-[9rem] h-[4.5rem] z-10 lg:w-[9rem] w-[4.5rem] relative lg:-top-[0rem] -top-[0.5rem] lg:-left-[7.2rem] -left-[4.2rem] rounded-full opacity-30 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#F4F4F6] via-[#C6C6FA]  to-[#9291FE]'></div>
              <div className='lg:h-[12rem] h-[8rem] z-0 lg:w-[12rem] w-[8rem] relative lg:-top-[5rem] -top-[4.5rem] lg:-left-[13.8rem] -left-[6.2rem] rounded-full opacity-30 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#F4F4F6] via-[#C6C6FA]  to-[#9291FE]'></div>
              
            </div>
            <div className='flex z-10 pt-[3rem] pl-8 lg:pl-0 lg:pt-[0rem] flex-col lg:flex-row justify-center items-center lg:h-[40rem]'>
          <div className=' lg:w-[35rem]'>
              <p className=''> 
                <span className=' lg:text-[3.5rem] text-[1.9rem] font-semibold text-[#0100BB] '> Laundry Piles Got  <br /><span className='lg:-mt-[1rem] -mt-[0.7rem] block '>You Down? <span className=' lg:text-[2.5rem] text-[1.7rem] font-medium text-[#646468] '>Get </span></span></span> <span className='lg:-mt-[1rem] -mt-[0.7rem] lg:text-[2.5rem] text-[1.7rem] block text-[#646468]  font-medium '> Sparkling Clothes Today <span className='lg:-mt-[1rem] -mt-[0.7rem] lg:text-[2.5rem] block text-[#646468] text-[1.7rem] font-medium '>with Easy Online Booking </span> <span className='lg:-mt-[1rem] -mt-[0.7rem] block lg:text-[2.5rem] text-[#646468] text-[1.7rem] font-medium '>& Transparent Pricing1</span></span>
              </p>
              <button className="text-awhite bg-[#0100BB] lg:mt-[1.5rem] mt-[1.0rem] hover:text-awhite px-14 py-1 rounded-md lg:text-[1.9rem]  font-medium">Schedule Pickup</button>
          </div>
          <div className=' lg:h-[30rem] h-[15rem] -ml-[1.4rem] lg:-ml-0 mt-[3rem] lg:mt-0 lg:w-[35rem] w-[18rem] '>
            <div className='absolute z-10 hero-image h-[15rem]  w-[18rem] lg:h-[30rem] lg:w-[35rem]'>

            </div>
            <div className='relative z-0 lg:top-[16.2rem] h-[8rem] w-[8rem] top-[8.1rem] lg:left-[21.5rem] left-[10.7rem] lg:h-[15rem] lg:w-[15rem] bg-[#0100BB] '>

            </div>
          </div>
        </div>
    </div>
  )
}

export default HeroPricingPage;