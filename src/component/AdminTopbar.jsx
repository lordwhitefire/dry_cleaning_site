import React, { useState } from "react";
import Admin from '../assets/admin.jpeg'

const AdminTopbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }
  return (
    <div className="max-w-full border-b border-darkgrey  px-2  md:px-12 bg-white shadow-xl text-black py-4">
      <div className="lg:px-8 px-3">
        <div className="flex justify-between items-center">
            <div className="relative mr-4">
            <span className="icon-[ep--search] text-darkgrey pointer-events-none lg:w-6 lg:h-6 w-5 h-5  absolute top-1/2 transform -translate-y-1/2 left-3"></span> 
                <input
                type="text"
                placeholder="Search"
                className="bg-white w-32 md:w-full text-black rounded-lg pl-9 pr-4 py-1 lg:py-3 border border-darkgrey focus:outline-none focus:ring focus:border-midnight"
                />
                
            </div>
           <div className="flex gap-x-2 items-center">
            <p>Hello,Admin</p>
           <div className="relative">
           <div className="h-3 w-3 z-0 bg-agreen rounded-full absolute lg:top-[2.2rem] top-[1.6rem] lg:left-[2.1rem] left-[2rem]"></div>
                <img
                src={Admin} // Add your profile picture source here
                alt="Profile"
                className=" w-10 h-10 lg:w-12 z-50 lg:h-12 rounded-full object-cover"
                onClick={toggleDropdown}
                />
               
                {isOpen && (
                <div className="absolute w-48 top-16 right-0 bg-white shadow-lg rounded-md p-2">
                    <ul>
                        <li className="py-2 px-4 hover:bg-midnight cursor-pointer">
                            <a href="#">
                                My Profile
                            </a>
                        </li>
                        <li className="py-2 px-4 hover:bg-midnight cursor-pointer">
                            <a href="/update-profile">
                                Update Profile
                            </a>
                        </li>
                    </ul>
                </div>
                )}
            </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default AdminTopbar;
