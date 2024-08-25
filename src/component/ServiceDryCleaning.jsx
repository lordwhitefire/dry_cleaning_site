import React from 'react'
import '../index.css'

const ServiceDryCleaning = () => {
  return (
    <div className='bg-[#ECF0F5] w-full h-[52rem] lg:h-[37rem] '>
       <div className='absolute z-0 overflow-hidden  py-[3rem] flex'>
              <div className='lg:h-[6rem] h-[3rem] z-20 lg:w-[6rem] w-[3rem] relative lg:-top-[5.7rem] -top-[3.1rem] lg:-left-[2.9rem] -left-[1.3rem] rounded-full opacity-50 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#F4F4F6] via-[#C6C6FA]  to-[#9291FE]'></div>
              <div className='lg:h-[9rem] h-[4.5rem] z-10 lg:w-[9rem] w-[4.5rem] relative lg:-top-[0rem] -top-[0.5rem] lg:-left-[7.2rem] -left-[4.2rem] rounded-full opacity-30 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#F4F4F6] via-[#C6C6FA]  to-[#9291FE]'></div>
              <div className='lg:h-[12rem] h-[8rem] z-0 lg:w-[12rem] w-[8rem] relative lg:-top-[5rem] -top-[4.5rem] lg:-left-[13.8rem] -left-[6.2rem] rounded-full opacity-30 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#F4F4F6] via-[#C6C6FA]  to-[#9291FE]'></div>
              
            </div>
            <div className="flex w-full justify-center items-center">
      {/* Division A */}
      <div className="flex lg:w-[100rem] flex-col lg:flex-row justify-between p-12">
        {/* Division B */}
        <div className=" flex flex-col gap-y-6 mb-8">
          <h2 className="text-[3rem] text-amidnight font-semibold mb-4">Rapid Clean</h2>
          <h2 className="text-[3rem] -mt-[2.8rem] mb-8 font-semibold">Laundry & Drycleaning</h2>
            {/* Division D */}
        <div className="grid gap-y-3 grid-cols-1">
          {/* Division E */}
          <div className="flex gap-2 items-center">
          <span className="icon-[fluent--checkmark-16-regular] w-8 h-8 text-amidnight"></span>
            <p className="text-center text-[1.4rem] font-semibold ">Laundry</p>
          </div>
          {/* Division F */}
          <div className="flex gap-2 items-center">
          <span className="icon-[fluent--checkmark-16-regular] w-8 h-8 text-amidnight"></span>
            <p className="text-center text-[1.4rem] font-semibold ">Dry Cleaning</p>
          </div>
          {/* Division G */}
          <div className="flex gap-2 items-center">
          <span className="icon-[fluent--checkmark-16-regular] w-8 h-8 text-amidnight"></span>
            <p className="text-center text-[1.4rem] font-semibold ">Pick up & Delivery </p>
          </div>
        </div>
         {/* Button Book Now */}
         <a href='/booknow' >
              <button className={`hidden lg:flex md:flex text-awhite bg-amidnight  hover:border hover:border-amidnight hover:bg-alight hover:text-amidnight px-14 py-2 rounded-md text-sm text-lg font-medium `}>
                Book Now
              </button>
              </a>
        </div>
        {/*Division C */}
        <div className=' lg:h-[30rem] h-[15rem] -ml-[1.4rem] lg:-ml-0  lg:mt-0 lg:w-[25rem] w-[18rem] '>
            <div className='absolute z-10 clothe-ironing-image h-[15rem]  w-[18rem] lg:h-[30rem] lg:w-[25rem]'>

            </div>
            <div className='relative z-0 lg:top-[16.2rem] h-[8rem] w-[8rem] top-[7.8rem] lg:left-[11.5rem] left-[10.7rem] lg:h-[15rem] lg:w-[15rem] bg-[#0100BB] '>

            </div>
          </div>
      </div>
     
    </div>
      
    </div>
  )
}

export default ServiceDryCleaning;

   

