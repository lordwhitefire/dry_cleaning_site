import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Logo from '../assets/Logo.png';

const AdminSidebar = ({ children }) => {
    const [activeLink, setActiveLink] = useState(null);
    const location = useLocation();

    const handleNavLinkClick = (index) => {
        setActiveLink(index);
    };

    const menuItem = [
        {
            path: "/admin-dashboard",
            name: "Dashboard",
            iconClassName: "icon-[ri--dashboard-line]",   
        },
        {
            path: "/customers-list",
            name: "Customers",
            iconClassName: "icon-[fluent--people-community-28-regular]",  
        },
        {
            path: "/products-list",
            name: "Products",
            iconClassName: "icon-[mingcute--t-shirt-line]", 
        },
        {
            path: "/orders-list",
            name: "Orders",
            iconClassName: "icon-[carbon--shopping-cart]",
        },
        {
            path: "/admin-notifications",
            name: "Notifications ",
            iconClassName: "icon-[eva--bell-outline]",
        },
        {
            path: "/admin-settings",
            name: "Settings ",
            iconClassName: "icon-[uil--setting]", 
        },
    ];

    return (
        <div className="flex flex-col md:flex-row">
            <nav className="w-full bg-[#ecf0f5]  md:w-48 md:h-screen md:bg-black/5 md:text-ablack fixed md:fixed overflow-y-auto shadow-2xl bottom-0 md:top-0 md:left-0">
                <div className="hidden p-4 md:flex items-center justify-center md:justify-start">
                    <img src={Logo} alt='Rapid clean logo' />
                </div>
                <div className="md:block hidden">
                    {menuItem.map((item, index) => (
                        <NavLink
                            key={index}
                            to={item.path}
                            className={`p-4 flex items-center gap-4 text-adarkgrey hover:text-amidnight hover:font-bold ${
                                activeLink === index ? 'bg-grey text-midnight font-bold' : ''
                            }`}
                            onClick={() => handleNavLinkClick(index)}
                        >
                            <span className={item.iconClassName}></span>
                            <span className="text-sm">{item.name}</span>
                        </NavLink>
                    ))}
                    <div className="md:block hidden absolute bottom-0 left-0 w-full  mb-24">
                        <NavLink
                            to="/admin-logout"
                            className={`p-4 flex items-center gap-4 text-black hover:text-amidnight hover:font-bold ${
                                location.pathname === '/logout' ? 'bg-grey text-midnight font-bold' : ''
                            }`}
                            onClick={() => setActiveLink(null)}
                        >
                            <span className="icon-[eva--log-out-outline]"></span>
                            <span className="text-sm">Log Out</span>
                        </NavLink>
                    </div>
                </div>
            </nav>
            <main className="flex-1 z-10 ml-0 md:ml-48 overflow-y-auto">{children}</main>
            <div className="md:hidden flex justify-around w-full bg-alight text-black z-20 fixed bottom-0">
                {menuItem.map((item, index) => (
                    <NavLink
                        key={index}
                        to={item.path}
                        className={`p-4 flex items-center gap-4 text-adarkgrey ${
                            activeLink === index ? 'bg-grey text-midnight font-bold' : ''
                        }`}
                        onClick={() => handleNavLinkClick(index)}
                    >
                        <span className={item.iconClassName}></span>
                    </NavLink>
                ))}
                <NavLink
                    to="/logout"
                    className={`p-4 flex items-center gap-4 text-ablack ${
                        location.pathname === '/admin-logout' ? 'bg-grey text-amidnight font-bold' : ''
                    }`}
                    onClick={() => setActiveLink(null)}
                >
                    <span className="icon-[eva--log-out-outline]"></span>
                </NavLink>
            </div>
        </div>
    );
};

export default AdminSidebar;
