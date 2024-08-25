import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import Ashley from '../assets/Ashley.png'

const Topbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }
  return (
    <div className="max-w-full border-b border-darkgrey  px-2  md:px-12 bg-white shadow-xl text-black py-4">
      <div className="px-8">
        <div className="flex justify-between items-center">
            <div className="relative mr-4">
                <CiSearch className="text-darkgrey pointer-events-none w-6 h-6  absolute top-1/2 transform -translate-y-1/2 left-3" />
                <input
                type="text"
                placeholder="Search"
                className="bg-white w-32 md:w-full text-black rounded-lg pl-9 pr-4 py-2 md:py-3 border border-darkgrey focus:outline-none focus:ring focus:border-midnight"
                />
                
            </div>
            <div className="relative">
                <img
                src={Ashley} // Add your profile picture source here
                alt="Profile"
                className=" w-12  md:w-18 md:h-18 rounded-full"
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
  );
};

export default Topbar;
