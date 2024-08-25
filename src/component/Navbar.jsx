import React, { useState } from 'react';
import Logo from '../assets/Logo.png'
import { NavLink } from "react-router-dom"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

//   const navigationArray = [
//     { title: "Home", link: "/" },
//     { title: "SignUp", link: "/SignUp" },
//     { title: "LogIn", link: "/LogIn" },
//   ];

  const [activeMenuItem, setActiveMenuItem] = useState('');
  const [isButtonClicked, setIsButtonClicked] = useState('')

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
  };

  const handleButtonClick = () => {
    setIsButtonClicked(!isButtonClicked);
  };


  return (
    <nav className="bg-white/30 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-12 lg:py-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex ">
            <img src={Logo} alt='Rapid Clean logo'  className='w-48'/>
            
          </div>
          
          {/* Links */}
          <div className="hidden md:flex justify-center flex-grow">
            <div className="flex space-x-4">


                {/* {navigationArray.map(({ title, link }) => (
                  <Link key={link} to={link}>
                    <p className="text-black hover:text-[#0100BB] px-3 py-2 rounded-md text-lg hover:underline-offset-8 font-medium">
                      {title}
                    </p>
                  </Link>
                ))} */}

              <NavLink to="/" onClick={() => handleMenuItemClick('link1')} className={`text-black hover:text-[#0100BB] px-3 py-2 rounded-md text-lg font-medium ${activeMenuItem === 'link1' ? 'underline underline-offset-8 text-midnight' : ''} `}>Home</NavLink>
              <NavLink to="/services" onClick={() => handleMenuItemClick('link2')} className={`text-black hover:text-[#0100BB] px-3 py-2 rounded-md text-lg font-medium ${activeMenuItem === 'link2' ? 'underline underline-offset-8 text-midnight' : ''} `}>Services</NavLink>
              <NavLink to="/pricing-page" onClick={() => handleMenuItemClick('link3')} className={`text-black hover:text-[#0100BB] px-3 py-2 rounded-md text-lg font-medium ${activeMenuItem === 'link3' ? 'underline underline-offset-8 text-midnight' : ''} `}>Pricing</NavLink>

            </div>
          </div>

          {/* Button */}
          <div className="flex items-center">
            <NavLink to='/dashboard' >
              <button onClick={handleButtonClick} className={`hidden lg:flex md:flex text-white bg-midnight hover:text-midnignt hover:border hover:border-midnight hover:bg-light hover:text-midnight px-14 py-2 rounded-md text-sm text-lg font-medium ${isButtonClicked ? 'bg-light border border-midnight text-midnight' : ''}`}>
                Book Now
              </button>
            </NavLink>
            <div className="-mr-2 flex md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} type="button" className=" inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-[#0100BB] focus:outline-none   ">
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Menu */}
      {isOpen && (
        <div className="md:hidden bg-red-400">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="/services" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Services</a>
            <a href="/pricing-page" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Pricing</a>
            <button className="text-white bg-[#0100BB] hover:text-white px-14 py-2 rounded-md text-sm text-lg font-medium">Book Now</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
