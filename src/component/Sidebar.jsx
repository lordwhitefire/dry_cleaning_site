/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { HiHome } from "react-icons/hi2";
import { MdOutlineDashboard } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { PiShoppingCartBold } from "react-icons/pi";
import { IoNotificationsOutline, IoSettingsOutline, IoLogOutOutline } from "react-icons/io5";

import { NavLink, useLocation } from 'react-router-dom';
import Logo from '../assets/Logo.png'


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const [activeLink, setActiveLink] = useState(null);
    const location = useLocation();

    const handleNavLinkClick = (index) => {
        setActiveLink(index);
      };

    const menuItem=[
        {
            path:"/home",
            name:"Home",
            icon:<HiHome/>
        },
        {
            path:"/dashboard",
            name:"My Dashboard",
            icon:<MdOutlineDashboard />
        },
        {
            path:"/bookNow",
            name:"Book Now",
            icon:<FiEdit/>
        },
        {
            path:"/orders",
            name:"My Orders",
            icon:<PiShoppingCartBold/>
        },
        {
            path:"/notifications",
            name:"Notifications ",
            icon:<IoNotificationsOutline/>
        },
        {
            path:"/settings",
            name:"Settings ",
            icon:<IoSettingsOutline/>
        },
        
    ]
    return (
        <div className="flex flex-col md:flex-row">
        <nav className="w-full md:w-48 md:h-screen md:bg-black/5 md:text-black fixed md:fixed overflow-y-auto md:overflow-y-visible shadow-2xl bottom-0 md:top-0 md:left-0">
          <div className="hidden p-4 md:flex items-center justify-center md:justify-start">
            <img src={Logo} alt='Rapid clean logo' />
          </div>
            <div className="md:block hidden">
                {menuItem.map((item, index) => (
                <NavLink
                    key={index}
                    to={item.path}
                    className={`p-4 flex items-center gap-4 text-darkgrey hover:text-midnight hover:font-bold ${
                        activeLink === index ? 'bg-grey text-midnight font-bold' : ''
                    }`}
                    onClick={() => handleNavLinkClick(index)}
                >
                    {item.icon}
                    <span className="text-sm">{item.name}</span>
                </NavLink>
                ))}
                <div className="md:block hidden absolute bottom-0 left-0 w-full  mb-24">
                    <NavLink
                        to="/logout"
                        className={`p-4 flex items-center gap-4 text-black hover:text-midnight hover:font-bold ${
                            location.pathname === '/logout' ? 'bg-grey text-midnight font-bold' : ''
                          }`}
                        onClick={() => setActiveLink(null)}
                    >
                        <IoLogOutOutline />
                        <span className="text-sm">Log Out</span>
                    </NavLink>
                </div>
            </div>
        </nav>
        <main className="flex-1 z-10 ml-0 md:ml-48 overflow-y-auto">{children}</main>
        <div className="md:hidden flex justify-around w-full bg-light text-black z-20 fixed bottom-0">
          {menuItem.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={`p-4 flex items-center gap-4 text-darkgrey ${
                    activeLink === index ? 'bg-grey text-midnight font-bold' : ''
                }`}
               onClick={() => handleNavLinkClick(index)}
            >
              {item.icon}
            </NavLink>
          ))}
          <NavLink
            to="/logout"
            className={`p-4 flex items-center gap-4 text-black ${
                location.pathname === '/logout' ? 'bg-grey text-midnight font-bold' : ''
              }`}
              onClick={() => setActiveLink(null)}
          >
            <IoLogOutOutline />
          </NavLink>
        </div>
      </div>
    );
};

export default Sidebar;