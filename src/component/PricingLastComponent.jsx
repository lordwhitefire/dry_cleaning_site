import React from 'react';

function PricingLastComponent() {
  return (
    <div className="bg-alight flex  flex-col lg:flex-row gap-x-8 gap-y-6 justify-center w-full py-16 lg:py-32 ">
    
    <div className='flex  bg-awhite  lg:p-8 py-8 lg:ap-x-6   rounded-md flex-col lg:flex-row justify-center items-center '>
          <div className=' mb-4'>
              <p className='lg:text-[1.4rem] mb-2  text-center text-[1.7rem] font-semibold text-[#0100BB] '> 
                <span className='  '> it's time to refresh your </span><br /> <span className='-mt-[0.9rem] block'>little one's wardrobe!!! </span>
              </p>
              <p className='lg:text-[1.2rem] text-center text-[1.3rem] font-semibold text-[#646468] '> 
                <span className='  '>  We're offering a sparkling </span><br /> <span className='-mt-[0.5rem] block'>20% discount on all</span> <br /> <span className='-mt-[2.4rem] block'>children's clothing for ages</span><br /><span className='-mt-[2.5rem] block'> 10 and under.</span>
              </p>
               
          </div>
          <div className='relative '>
           
            <div className='absolute z-0 h-[8rem] w-[8rem] top-[8.1rem] mt-[0.3rem] lg:ml-[10.6rem] ml-[11.1rem] lg:h-[7.5rem] lg:w-[7.5rem] bg-[#0100BB] '>

            </div>
            <div className='relative z-10 hero-image1 h-[15rem]  w-[18rem] lg:h-[15rem] lg:w-[17rem]'>

             </div>
          </div>
        </div>
        <div className='flex  bg-awhite  lg:p-8 py-8 lg:ap-x-6 rounded-md  flex-col lg:flex-row justify-center items-center '>
          <div className=' mb-4 '>
              <p className='lg:text-[1.4rem] mb-2  text-center text-[1.9rem] font-semibold text-[#0100BB] '> 
                <span className='  '> Payment Method </span>
              </p>
              <p className='lg:text-[1.2rem] text-center text-[1.3rem] font-semibold text-[#646468] '> 
                <span className='  '>  At RapidClean, we make laundry </span><br /> <span className='-mt-[0.5rem] block'>convenient not just in terms of</span> 
                <br /> <span className='-mt-[2.4rem] block'>pickup and delivery, but also when</span><br /><span className='-mt-[2.4rem] block'> it comes to payment.</span>
                <br /><span className='-mt-[2.4rem] block'>-Pay quickly and securely using </span> <br /><span className='-mt-[2.4rem] block'>-your bank app or USSD </span>
                <br /><span className='-mt-[2.4rem] block'>-Credit Cards: Inview </span>
              </p>
               
          </div>
          <div className='relative '>
           
          
            <div className='relative z-10 hero-image2 h-[15rem]  w-[18rem] lg:h-[15rem] lg:w-[17rem]'>

             </div>
          </div>
        </div>
    </div>

         
       

  );
}

export default PricingLastComponent;
