import React from "react";
import Navbar from "./Navbar";

import serviceIcon from "../assets/service-icon.png"
import serviceIcon2 from "../assets/service-icon2.png"
import serviceIcon3 from "../assets/service-icon3.png"

const ServiceBanner = () => {
return (
    <div>
        <div className="w-full">
    <div className="service-image lg:h-[30rem] h-[52rem] mb-[14rem] w-full">
     <div className="h-[30rem] flex justify-center items-center w-full bg-adark/50">
      <p className="lg:text-[3rem] text-[2.5rem] text-center font-semibold text-awhite">Providing the best Laundry Services <br /> for Our Customers</p>
     </div>
     <div className="relative -top-[4rem]  grid mx-auto lg:w-[75rem] grid-cols-1 lg:grid-cols-3">
        <div className="grid  items-center py-12 px-6 bg-[#0100bb] grid-cols-8">
            <div className="col-span-2">
           <img src={serviceIcon3} className="object-cover" alt="" />
            </div>
            <div className=" col-span-6 text-awhite">
            <h1 className="text-xl mb-6">
                Save Time and Money
                </h1>
                <p className="text-sm">
                Experience the ultimate convenience 
with our laundry services, saving you 
precious time and ensuring your money 
is well-spent on quality care for your garments.
                </p>
            </div>
        </div>
        <div className="grid  items-center p-6 bg-[#d6d6d6] grid-cols-8">
            <div className="col-span-2">
           <img src={serviceIcon2} className="object-cover" alt="" />
            </div>
            <div className=" col-span-6 ">
            <h1 className="text-xl mb-6  text-[#0100bb] ">
                Satisfaction Guarantee
                </h1>
                <p className="text-sm">
                We're committed to your satisfaction. 
If you're not thrilled with the results, 
we'll make it right. Your happiness 
is our top priority.
                </p>
         
            </div>
        </div>
        <div className="grid   items-center p-6 bg-[#30ca53] grid-cols-8">
            <div className="col-span-2">
           <img src={serviceIcon} className="object-cover" alt="" />
            </div>
            <div className=" col-span-6 text-awhite">
            <h1 className="text-xl mb-6">
                24/7 Support 
                </h1>
                <p className="text-sm">
                Need assistance at any hour? We're here 
for you around the clock. Our dedicated 
support team is just a call or message 
away, ready to help whenever you need us
                </p>
          
            </div>
        </div>
      </div>
    </div>
   
    </div>
    </div>
)
}
export default ServiceBanner